const { Router } = require("express");
const authController = require("../controller/auth.controller");

const authRouter = Router();


authRouter.post('/tenant' , authController.CreateTenant )

module.exports = authRouter

