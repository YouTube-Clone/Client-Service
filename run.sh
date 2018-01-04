#!/usr/bin/env bash
if [ ! -z "YouTube-Client" ]; then
 export NODE_ENV=YouTube-Client
fi

ls 
cd ~/node
ls
pm2 start app/server.js -n www -i 0