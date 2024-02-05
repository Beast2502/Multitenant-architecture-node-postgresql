module.exports  = async function sequelizeLoader(sequelizeInstance){
    if(!sequelizeInstance) throw new Error('Error, sequelize instance is null or undefined ')

    // ASSISIATIONS

    await sequelizeInstance.sync({alter:false}).then(async () =>{
        console.log('Connection to db has been successfull')
    }).catch(err => console.log(err))

}