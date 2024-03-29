const { TenantUserModel , UserAccountModel , TenanatModel} = require("../models")

module.exports  = async function sequelizeLoader(sequelizeInstance){
    if(!sequelizeInstance) throw new Error('Error, sequelize instance is null or undefined ')

    // Tenant Model
    TenanatModel.hasMany(TenantUserModel ,{foreignKey : 'fk_tenant' , onDelete : 'RESTRICT'})

    // TENANT USER MODEL
    TenantUserModel.belongsTo(UserAccountModel , {foreignKey : 'fk_user'});
    TenantUserModel.belongsTo(TenanatModel,{foreignKey : 'fk_tenant'});

     // USER ACCOUNT MODEL
     UserAccountModel.hasMany(TenantUserModel,{foreignKey : 'fk_user' , onDelete : 'RESTRICT'})
     
    

    // ASSOCIATIONS



    await sequelizeInstance.sync({alter:false}).then(async () =>{
        console.log('Connection to db has been successfull')
    }).catch(err => console.log(err,"WHAT IS THE ERROR"))

}