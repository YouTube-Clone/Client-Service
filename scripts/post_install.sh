#!/usr/bin/env bash
set -e

npm install

# setup NODE_ENV
if [ ! -z "YouTube-Client" ]; then
    export NODE_ENV='YouTube-Client'

    hasEnv=`grep "export NODE_ENV" ~/.bash_profile | cat`
    if [ -z "$hasEnv" ]; then
        echo "export NODE_ENV=YouTube-Client" >> ~/.bash_profile
    else
        sed -i "/export NODE_ENV=\b/c\export NODE_ENV=YouTube-Client" ~/.bash_profile
    fi
fi

# add node to startup
hasRc=`grep "su -l masterc44" /etc/rc.d/rc.local | cat`
if [ -z "$hasRc" ]; then
    sudo sh -c "echo 'su -l masterc44 -c \"cd ~/node;sh ./run.sh\"' >> /etc/rc.d/rc.local"
fi