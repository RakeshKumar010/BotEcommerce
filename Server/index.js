const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const corsOptions = {
    origin: ['https://ecom.botmediadigital.com/','https://bot-ecommerce-gamma.vercel.app','http://localhost:5173'], // This should be the origin you want to allow
    optionsSuccessStatus: 200 // For legacy browser support
  };

app.use('/uploads', express.static('uploads'));
app.use(cors(corsOptions))
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())

app.use(require('./router/router'))
const PORT = process.env.PORT || 8001;

app.listen(PORT,()=>{
    console.log('Server is open at localhost:'+PORT);
})