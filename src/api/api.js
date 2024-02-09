const authRouter = require('./routes/auth.router');
const testRouter = require('./routes/test.router');
const custRouter = require('./routes/cust.router');

function api(){
    return[
        {
            path : '/test',
            controller : testRouter,
            
        },
        {
            path : '/auth',
            controller : authRouter
        },
        {
            path : '/customer',
            controller : custRouter
        }
    ]

}

module.exports = api;
