const express = require('express')
const routes = require('./routes/api')
const app = express()
const saveTickersInMemory = require("../src/functions/saveTickersInMemory")
const verifyHeader = require('./Middlewares/verifyHeader')
require('dotenv').config()

app.use(express.json())

app.use('/', express.static(__dirname + '/front/dist'))
app.use('/api', verifyHeader.auth, routes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Running")
    saveTickersInMemory.start()
    setInterval(() => {
    saveTickersInMemory.start()
    }, 43200000);
})