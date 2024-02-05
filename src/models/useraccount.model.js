const Sequelize = require('sequelize');
const { sequelizeInstance } = require('../config');
const { Model, NOW, DataTypes, UUIDV4 } = Sequelize

class UserAccountModel extends Model { };

UserAccountModel.init({
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
    modelName: 'user_account',
    schema: 'accounts'
})


module.exports = UserAccountModel;