const http = require('http')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('./utils/global.middleware')

const userRouter = require('./routes/users.route')

const app = express()

const corsOption = {
    origin:true,
    Credentials:true
} 


// middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser());

app.use('/api/v1/users',userRouter)

app.use(globalErrorHandler)


module.exports = app