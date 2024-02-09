const UserAccountModel = require('./useraccount.model');
const TenanatModel = require('./tenant.model');
const TenantUserModel = require('./tenantuser.model');
const {CustomerAccountModel,initializeCustomerModel ,creatCustomerAccount} =  require('./customer.model');

module.exports = {
    UserAccountModel,
    TenanatModel,
    TenantUserModel,
    CustomerAccountModel,
    initializeCustomerModel,
    creatCustomerAccount
}