const Sequelize = require('sequelize');

const { sequelizeInstance } = require('../config');
const { Model, NOW, DataTypes, UUIDV4 } = Sequelize;

class TenantUserModel extends Model { }

TenantUserModel.init({
    fk_tenant: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tenant',
            key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    },
    fk_user: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'user_account',
            key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    }

}, {
    sequelize: sequelizeInstance,
    modelName: 'tenant_user',
    schema: 'accounts'
})

module.exports = TenantUserModel;