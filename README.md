# Financeapi Node

A RESTful CRUD API for finance data. Boilerplate generated by [generator-rest](https://github.com/diegohaz/generator-rest). Tested using node v6.

## Quick Start
```bash
npm i && npm install -g newman
```
You'll need MongoDB running, there's a prebuilt version included in the project but if you want it running as a service in the background you can follow the instuctions [here](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)

Run the API with `npm run dev` and run the integration tests in the seperate terminal with `npm test`

## Commands

After you generate your project, these commands are available in `package.json`.

```bash
npm test # run the API in test mode
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
```

## Playing locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```
