const saveTickersInMemory = require("../src/functions/saveTickersInMemory")
const verifyHeader = require('./Middlewares/verifyHeader')
const client = require('./routes/client')
const api = require('./routes/api')
const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json())

app.use('/api', verifyHeader.auth, api)
app.use('/', client)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Running")
    saveTickersInMemory.start()
    setInterval(() => {
    saveTickersInMemory.start()
    }, 43200000);
})