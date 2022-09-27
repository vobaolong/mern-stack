const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://mernstore:k4x4jKHdhw9N0Kfr@cluster0.wvjjelo.mongodb.net/CNMPM_MERN?retryWrites=true&w=majority');
        console.log('Connect successfully!!!!')
    }catch (error){
        console.log('Connect failure!!!!')
    }
}

module.exports = {connect}