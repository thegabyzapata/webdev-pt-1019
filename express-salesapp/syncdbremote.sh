#!/bin/bash

source .env
LOCALDBURI=$MONGODB_URL
echo "WARNING!!! REMOTE DATA WILL BE DESTROYED"
echo "Paste your MongoDBAtlas URI:"
read REMOTEDBURI
echo "Sync data from $LOCALDBURI to $REMOTEDBURI"

mongodump --uri $LOCALDBURI
mongorestore --uri $REMOTEDBURI --drop