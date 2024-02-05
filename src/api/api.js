const authRouter = require('./routes/auth.router');
const testRouter = require('./routes/test.router');


function api(){
    return[
        {
            path : '/test',
            controller : testRouter,
            
        },
        {
            path : '/auth',
            controller : authRouter
        }
    ]

}

module.exports = api;
