const constants = require('./constants.config');

const user = constants.DB.POSTGRES_USER;
const password = constants.DB.POSTGRES_PASSWORD;
const database = constants.DB.POSTGRES_DB;
const host = constants.DB.POSTGRES_HOST;
const dialect = constants.DB.DIALECT;

const databaseConnectionSetup = () =>{
    return{
        user,
        password,
        database,
        options :{
            dialect,
            host,
            dialectOptions:{
                multipleStatements : true,
            },
            logging : false,
            timezone : '-06:00',
            define :{
                freezeTableName : true,
                timestamps : false,
                underscored : true
            }
        }
    }
}


module.exports = databaseConnectionSetup();