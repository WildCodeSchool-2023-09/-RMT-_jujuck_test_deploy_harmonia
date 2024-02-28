#!/usr/bin/env sh

sleep 5
cd ./frontend && npm run build
cd ../backend && npm run build
npm start
