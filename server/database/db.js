const mongoose = require('mongoose')
<<<<<<< HEAD



async function connect() {
    try {
=======
async function connect(){
    try{
>>>>>>> 74b02bba427de3c1db00996b952372133dc78837
        await mongoose.connect('mongodb+srv://mernstore:k4x4jKHdhw9N0Kfr@cluster0.wvjjelo.mongodb.net/CNMPM_MERN?retryWrites=true&w=majority');
        console.log('Connect successfully!!!!')
    } catch (error) {
        console.log('Connect failure!!!!')
    }
}

module.exports = { connect }

// import mongoose from 'mongoose';
// const connectDB = async () => {
//     try {
//         const connection = mongoose.connect(process.env.MONGO_URL, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         })
//         console.log('MongoDB connection')
//     }
//     catch (error) {
//         console.log(`Error connecting to: ${error.message}`)
//         process.exit(1)
//     }
// }
// export default connectDB