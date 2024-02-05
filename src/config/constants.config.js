require('dotenv').config();


module.exports= {
    SERVER_PORT : process.env.SERVER_PORT || 6000,
    DB :{
        POSTGRES_USER : process.env.POSTGRES_USER,
        POSTGRES_PASSWORD  : process.env.POSTGRES_PASSWORD,
        POSTGRES_DB : process.env.POSTGRES_DB,
        POSTGRES_HOST : process.env.POSTGRES_HOST,
        DIALECT : process.env.DIALECT
    }
}