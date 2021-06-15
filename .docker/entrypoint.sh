#!/bin/bash

cd /home/node/app

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

yarn 
yarn run typeorm migration:run
yarn run start:dev