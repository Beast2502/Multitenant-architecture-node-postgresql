const Sequelize = require('sequelize');

const {dbSetup} = require('.');

const sequelizeInstance = new Sequelize(
    dbSetup.database,
    dbSetup.user,
    dbSetup.password,
    dbSetup.options
    
)

module.exports = sequelizeInstance;