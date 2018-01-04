#!/usr/bin/env bash
if [ ! -z "YouTube-Client" ]; then
 export NODE_ENV='YouTube-Client'
fi

cd ~/app
pm2 start server.js -n www -i 0