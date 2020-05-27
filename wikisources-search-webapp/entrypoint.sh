#!/bin/bash
set -xe

sed -i "s/API_BASE_HOST/$API_BASE_HOST/g" /usr/local/apache2/htdocs/main*.js*

exec "$@"