// loads .env file contents into process.env by default//////////

require('dotenv').config()
const express= require('express')
const cors =require('cors')
const router = require('./Router/router')
require('./DB/connection')

////////////create express server/////////////////

const pfserver = express ()

pfserver.use (cors())

//convert data from json => parse json
pfserver.use(express.json())
pfserver.use(router)


const PORT = 4000 || process.env.PORT;


pfserver.listen(PORT,()=>{
    console.log(`project Fair Started Running At Port:${PORT} and waiting for the client request!!!!`);
})


pfserver.get('/',(req,res)=>{
    res.send('<h1>Project-Fair Started And Waiting For Client Request</h1>')
})  

