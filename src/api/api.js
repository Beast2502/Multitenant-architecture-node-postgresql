const testRouter = require('./routes/test.router');


function api(){
    return[
        {
            path : '/test',
            controller : testRouter
        }
    ]

}

module.exports = api;
