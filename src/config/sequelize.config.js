const Sequelize = require('sequelize');

const dbSetup = require('./database.config');


const sequelizeInstance = new Sequelize(
    dbSetup.database,
    dbSetup.user,
    dbSetup.password,
    dbSetup.options
    
)

module.exports = sequelizeInstance;