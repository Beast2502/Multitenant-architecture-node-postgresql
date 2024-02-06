const argon =  require('argon2');

const { UserAccountModel } = require('../models');
const { database } = require('../config/database.config');

const signupRepo = {}

signupRepo.verifyAlreadyExist = async email =>{
   const user =  await UserAccountModel.findOne({where : {email}})
   if(user) throw new Error ("User account already exists")


}

signupRepo.createUserAccount = async data => {

    console.log(data,"SIGN Up")

    const userDTO =  {
        fullName : data.fullname,
        email : data.email,
        password : await argon.hash(data.password)
    }

    const user = UserAccountModel.create(userDTO);

    return {userId : user.id}

}

module.exports = signupRepo