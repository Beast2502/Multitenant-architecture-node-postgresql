const { Router } = require("express");
const { createCustomer } = require("../controller/customers.controller");

const customer = Router();


customer.post('/create' , createCustomer )

module.exports = customer

