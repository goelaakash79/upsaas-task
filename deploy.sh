#!/bin/bash

echo "Starting deployment process...."
echo "Deploying backend"
git add .
git commit -m ":rocket: deploying to heroku"
git push heroku master
echo "Deploying frontend"
cd ./client
yarn run build
netlify deploy --prod
echo "Latest development code deployed successfully!!"
echo "Pushing to GitHub"
git push origin master

# ENDSSH