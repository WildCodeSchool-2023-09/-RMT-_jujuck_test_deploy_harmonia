#!/usr/bin/env sh
echo "Starting project"
sleep 5
cd ./server && node ./bin/migrate.js && node index.js


