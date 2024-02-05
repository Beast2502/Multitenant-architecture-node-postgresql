const constantsConfig = require('./constants.config');
const databaseSetup = require('./database.config');
const sequelizeInstance = require('./sequelize.config');
 

module.exports = {
    config : constantsConfig ,
    dbSetup : databaseSetup ,
    sequelizeInstance
}