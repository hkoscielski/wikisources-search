# Wikisources search

This project is simple IR system operating on Wikisources dataset indexed in Elasticsearch.

## How to run locally

### Prerequisites
* Docker version > 19.03.x

### Steps to initialize
1. Download project:

    ```
    git clone https://github.com/hkoscielski/wikisources-search.git
    cd wikisources-search/
    ```
   
2. Run all applications:

    ```
    API_BASE_HOST=$(docker-machine ip) docker-compose up -d
    ```

3. Check if elasticsearch is started:

   ```
   curl http://$(docker-machine ip):8080/api/v1/verify-es
   ```
   Elasticsearch is started if response is ```true```
   
4. Index documents in elasticsearch:

    ```
    cd elasticsearch/
    ./index_documents_in_es_bulk.sh index.json sample_data/enwikisource-20000.json
    ```
   
5. Connect to website in browser:

   ```
   http://<ip>:4200
   ```
   where ```<ip>``` can be checked in terminal using the following command: 
   ```
   docker-machine ip
   ```
   
### Regular usage
1. Stop applications:
    
   ```
   docker-compose stop <application_name>
   ```
   where ```<application_name>``` is one of ```elasticsearch```, ```wikisources-search-webservice```, ```wikisources-search-webapp```
   
   NOTE: If ```<application_name>``` is empty, all applications are stopped.
   
2. Start applications:

   ```
   docker-compose start <application_name>
   ```
   where ```<application_name>``` is one of ```elasticsearch```, ```wikisources-search-webservice```, ```wikisources-search-webapp```
   
   NOTE: If ```<application_name>``` is empty, all applications are started.
   