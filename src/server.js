const express = require('express')
const routes = require('./routes/api')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use('/', express.static(__dirname + '/front/dist'))
app.use('/api', routes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Running")
})