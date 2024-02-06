const argon =  require('argon2');

const { UserAccountModel } = require('../models');
const { database } = require('../config/database.config');

const signupRepo = {}

signupRepo.verifyAlreadyExist = async email =>{
   const user =  await UserAccountModel.findOne({where : {email}})

   if(user) return true
   return false;


}

signupRepo.createUserAccount = async data => {


    const userDTO =  {
        fullName : data.fullname,
        email : data.email,
        password : await argon.hash(data.password)
    }

    const user = await UserAccountModel.create(userDTO);

    console.log(user,"TEST USER CREATED")

    return {userId : user.id}

}

module.exports = signupRepo