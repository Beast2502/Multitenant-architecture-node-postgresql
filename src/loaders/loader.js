const expressLoader = require("./express.loader")
const schemaLoader = require("./schema.loader");
const sequelizeLoader = require("./sequelize.loader");

module.exports = {
    init : async({expressApp = null , sequelizeInstance = null , appRoutes = null})=>{

        const verify =  await schemaLoader(sequelizeInstance);

     

        if(verify){
            await sequelizeLoader(sequelizeInstance)
        }

        await expressLoader(expressApp,appRoutes)

    }
}