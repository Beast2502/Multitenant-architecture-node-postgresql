const morgan = require('morgan');

const {json,urlencoded} = require('express');

const cors = require('cors');
const helmet = require('helmet');


module.exports = async function expressLoader(app,routes){
    if(!app || !Array.isArray(routes)) throw new Error('Erros in arguements')


    // middlewares
    app.use(morgan('dev'));
    app.use(json());
    app.use(urlencoded({extended : false}))
    app.use(cors({origin : '*'}));
    app.use(helmet());

    routes.forEach(r => {
        app.use(r.path , r.controller)
    });




}