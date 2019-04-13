# CafeDesk

### Main Contributors: [Vincent Wong](https://github.com/vnctwong), [Yves Desjardins](https://github.com/YvesDesjardins), [Xuenan Wang](https://github.com/xwang1000)

### Relevant repositories:
- Server - https://github.com/xwang1000/cafedesk-server
- Client -  https://github.com/xwang1000/cafedesk-client

## Overview

CafeDesk is a single page web app designed to look up coffee shops with a work-friendly environment. 

## Screenshots
![CafeDesk screenshots](https://github.com/xwang1000/cafedesk-client/blob/master/public/screenshots/screenshots.png?raw=true)

## Demo
[Watch **Feed feature** demo](https://youtu.be/dKiCQzCqZHA)

[Watch **Search feature** demo](https://youtu.be/8CFSHzCrCSI)

## Getting Started (User)
- Hop onto our website at https://cafedesk.netlify.com

## Getting Started (Developer)
- Clone the server
  1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
  2. Update the .env file with your correct local information
  3. Install dependencies: `npm i`
  4. Run migrations: `npx sequelize db:migrate`
  6. Run the seed: `npx sequelize db:seed:all`
  7. Run the server: `npm start`
- Clone the client
  1. Create the `./src/secrets.js` by using `secrets-example.js` as a reference: `cp secrets-example.js secrets.js`
  2. Update the secrets.js file with your correct local information
  3. Install dependencies: `npm i`
  7. Run the server: `npm start`
  8. Visit `http://localhost:3000/`

## Tech Stack

- React (Hooks, Router) 
- HTML / pure CSS / JavaScript
- NodeJS
- ExpressJS
- Node.JS
- Sequelize
- Axios
- Jest
- CircleCI
- Heroku
- Netlify

### API
- Yelp API
- Google Maps API

## Known Issues
- Let us know if you identify any!
