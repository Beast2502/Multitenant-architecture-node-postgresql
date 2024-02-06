const authService = require("../../auth/auth.service");



const authController = {}

authController.CreateTenant = [
    async (req, res, next) => {

        try {

            // fullname , email,  password , schema_name


            console.log(req.body,"REQ")
            const { msg } = await authService.registerTenant({ data: req.body });



            res.status(200).json({ msg })


        } catch (err) {

            res.status(400).json({msg : err.message})

        }

    }
]


module.exports = authController;