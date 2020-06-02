#!/bin/bash

index_filename=$1
data_filename=$2
total_index_time=0

ES_HOST="http://$(docker-machine ip):9200"

create_index_if_not_exists () {
  printf "Creating index from %s file ...\n" "${index_filename}"
  http_code=$(curl -s -o /dev/null -w "%{http_code}" -H 'Content-Type: application/x-ndjson' -XPUT "$ES_HOST"/wikisources --data-binary @"$index_filename")
  if [ "$http_code" == '200' ]
  then
      printf "Index created successfully\n"
  elif [ "$http_code" == '400' ]
  then
      printf "Index already exists\n"
  else
      echo "Cannot create index from ${index_filename} file"
      echo "Http code: $http_code"
      exit 1
  fi
}

index_data () {
  rm -rf es-chunks
  mkdir -p es-chunks
  cd es-chunks || exit 1
  cat "../$data_filename" | split -a 10 -l 500 - enwikisources-

  for file in *; do
      printf "Processing file %s ...\n" "${file}"
      response=$(curl -s -H 'Content-Type: application/x-ndjson' -XPOST "$ES_HOST"/_bulk --data-binary @"$file")
      errors=$(echo "$response" | grep errors | cut -d':' -f 3 | cut -d',' -f 1 | sed -e 's/^[[:space:]]*//')
      if [ "$errors" != "false" ]
      then
          echo "Indexing with errors: response body - ${response}"
          exit 1
      else
          took=$(echo "$response" | grep took | cut -d':' -f 2 | cut -d',' -f 1)
          printf "Indexed successfully in %d ms\n" "$(( took ))"
          total_index_time=$(( total_index_time + took ))
      fi
  done

  printf "All documents have been successfully indexed in total time %s ms" $total_index_time

  cd ..
  rm -r es-chunks
}

create_index_if_not_exists
index_data