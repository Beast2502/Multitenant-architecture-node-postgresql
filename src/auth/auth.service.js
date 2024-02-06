const signupRepo = require("./signup.repo");
const tenantRepo = require("./tenant.repo");

const authService =  {}

authService.registerTenant =  async function ({data}){


    // verify 

    const userExist = await signupRepo.verifyAlreadyExist(data.email);


    if(userExist) throw new Error("User already exist!")

    const verify = await tenantRepo.generateSchema(data.schemaName);

    // "Attempt to generate schema and verify that it was created correctly."

    if(!verify) throw new Error("Schema could not be generated")

    const {userId}  = await signupRepo.createUserAccount(data)

    const {tenantId} = await tenantRepo.registerTenant(data.schemaName)

    console.log(userId,tenantId,"BEFORE BINDING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    await tenantRepo.bindSchemaToUser(userId , tenantId)

    

    return {msg:'Tenant has been registered successfully' }

}


module.exports = authService;