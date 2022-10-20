import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './routes/user'
dotenv.config()

const app = express()

const port = process.env.PORT || 5000

// Connect to Mongoose server
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DBConnected successfully')
  })
  .catch((error) => {
    console.log(error.message)
  })

app.use('api/user', userRoute)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
