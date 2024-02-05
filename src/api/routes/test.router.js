const express = require('express')
const morgan = require('morgan');


const route = express.Router();

route.get('/',(req,res)=>{
    res.status(200).json({message : "Hi im Working"})
})


module.exports = route;