const { CustomerAccountModel, CustomerModel, creatCustomerAccount } = require("../../models");



const getCustomers = async (req, res, next) => {

    try {


    } catch (err) {
        console.log(err)
    }



}




const createCustomer = async (req, res, next) => {

    try {

        const { fullName, email, password } = req.body;

        const tenant_id = req.headers['x-tenant_id'];




        await creatCustomerAccount({ fullName, email, password }, `tenant_${tenant_id}`)




        res.status(200).json({ message: `I am working ${tenant_id}` })



    } catch (err) {
        console.log(err)
    }



}


module.exports = {
    createCustomer,
    getCustomers
}