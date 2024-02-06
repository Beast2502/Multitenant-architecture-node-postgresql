const signupRepo = require("./signup.repo");
const tenantRepo = require("./tenant.repo");

const authService =  {}

authService.registerTenant =  async function ({data}){


    // verify 

    console.log(data.email,"AUTH ASERVICES >>>>>>>>>>>>>>>>>>>>.")
    signupRepo.verifyAlreadyExist(data.email)

    const verify = await tenantRepo.generateSchema(data.schemaName);

    // "Attempt to generate schema and verify that it was created correctly."

    console.log(verify,"CHECK")
    if(verify) throw new Error("Schema could not be generated")

    const {userId}  = await signupRepo.createUserAccount(data)

    const {tenantId} = await tenantRepo.registerTenant(data.schemaName)

    await tenantRepo.bindSchemaToUser(userId , tenantId)

    

    return {msg:'Tenant has been registered successfully' }

}


module.exports = authService;