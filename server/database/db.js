const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/CNPMM_PC');
        console.log('Connect successfully!!!!')
    }catch (error){
        console.log('Connect failure!!!!')
    }
}

module.exports = {connect}