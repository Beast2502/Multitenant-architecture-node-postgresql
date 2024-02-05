const express = require('express');
const loader = require('./loaders/loader');

const api  = require('./api/api');

const {config} = require('./config')

function startServer() {
    const app = express();

    loader.init({expressApp : app ,appRoutes : api()})

    app.listen(config.SERVER_PORT , ()=>console.log(`Server is running on port : ${config.SERVER_PORT}`))
}

startServer()