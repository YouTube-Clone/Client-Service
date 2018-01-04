#!/usr/bin/env bash
if [ ! -z "YouTube-Client" ]; then
 export NODE_ENV=YouTube-Client
fi

cd /app/YouTube-Client

node app/server.js > /dev/null 2> /dev/null < /dev/null &