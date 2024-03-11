#!/usr/bin/env sh
echo "Starting project"
sleep 5
cd /usr/src/app/server
node migrate.js
node index.js

