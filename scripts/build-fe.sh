#!/bin/sh
rm -rf ./dist
rm -rf ./client/dist
cd client
npm run build
cp -R ./dist/eman ../dist