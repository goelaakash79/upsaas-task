<h1 align="center">
  <a href="https://upsaas.netlify.app/">
  upSaaS
  </a> </h1>
<p  align="center">
  <a href="https://github.com/goelaakash79/upsaas-task#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/Documentation-YES-blue/?style=for-the-badge&logo=github" target="_blank" />
  </a>
  <a href="https://twitter.com/goelaakash79">
    <img alt="Twitter: goelaakash79" src="https://img.shields.io/twitter/follow/goelaakash79.svg?style=for-the-badge&logo=twitter" target="_blank" />
  </a>
</p>
<img src="https://i.imgur.com/PzJm7nR.png" width="100%"/>

### 👻 [Preview](https://upsaas.netlify.app)

## Tech and tools used

1. ReactJS
2. ExpressJS
3. NodeJS
4. MongoDB
5. TailwindCSS
6. Netlify
7. Heroku
8. mLab

## Setup on a local machine

Simply go to the command line and run these commands.

```sh
git clone https://github.com/goelaakash79/upsaas-task
cd upsaas-task
/** backend depenedencies **/
yarn or npm i
/** frontend depenedencies **/
cd client
yarn or npm i
```

## Run on a local machine

Simply go to the command line and run these commands.

```sh
cd upsaas-task
/** start backend **/
yarn run dev or npm run dev
/** start frontend **/
cd client
yarn start or npm start
```

## Deployment Guide

Simply go to the command line and run these commands.

```sh
cd upsaas-task
./deploy.sh
```

## Understanding deploy.sh

Simply go to the command line and run these commands.

```sh
echo  "Starting deployment process...."
echo  "Deploying backend"
git add .
git commit -m ":rocket: deploying to heroku"
git push heroku master
echo  "Deploying frontend"
cd ./client
yarn run build
netlify deploy --prod
echo  "Latest development code deployed successfully!!"
```

## Color Palette

<img src="https://i.imgur.com/GBHb2mr.png"/>

## Author

🙍‍♂️ **Aakash Goel**

-   💬 Twitter: [@goelaakash79](https://twitter.com/goelaakash79)
-   👨‍💻 Github: [@goelaakash79](https://github.com/goelaakash79)
