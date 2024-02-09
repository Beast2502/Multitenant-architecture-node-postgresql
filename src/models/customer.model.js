const Sequelize = require('sequelize');
const { sequelizeInstance } = require('../config');
const { Model, NOW, DataTypes, UUIDV4 } = Sequelize

class CustomerAccountModel extends Model { 
  
};

async function creatCustomerAccount({fullName , email ,password } , schemaName){
    console.log({ fullName, email, password }, schemaName ,"I AM HERE"); 
    initializeCustomerModel(schemaName)
    try {
        const customer = await CustomerAccountModel.create(
            { fullName, email, password },
            { schema: schemaName}
        );
        console.log(customer);
    } catch (error) {
        console.error('Error creating customer:', error);
    }
}



function initializeCustomerModel(schemaName){
   try{
    CustomerAccountModel.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            unique: true,
            defaultValue: UUIDV4
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: NOW()
        }
    }, {
        sequelize: sequelizeInstance,
        modelName: 'customers',
        schema: schemaName
    })
   }catch(err){
    console.error('Error initializing User model:', error);
   }
}




module.exports = {CustomerAccountModel , initializeCustomerModel ,creatCustomerAccount};