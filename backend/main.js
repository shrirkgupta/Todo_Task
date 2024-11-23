let express = require('express')
let cors = require('cors')
let env = require('dotenv')


const app=express()

app.use(express.json())
app.use(cors())


env.config({
    path:'./.env'
 })
 
  let db= require('./databaseConfig')
  db()



   let router = require('./Routes/todoRoute')
   app.use('/api', router)
  


app.listen(process.env.PORT,()=>[
    console.log(`sever is runing ${process.env.PORT}`)
 ])
