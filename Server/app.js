const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
app.use('/uploads', express.static('uploads'));
app.use(cors())
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())

app.use(require('./router/router'))
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Server is open at localhost:'+PORT);
})