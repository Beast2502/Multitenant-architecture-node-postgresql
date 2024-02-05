const expressLoader = require("./express.loader")

module.exports = {
    init : async({expressApp = null , sequelizeInstance = null , appRoutes = null})=>{
        await expressLoader(expressApp,appRoutes)

    }
}