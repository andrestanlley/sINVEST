const saveTickersInMemory = require("../src/services/saveTickersInMemory")
const verifyHeader = require('./Middlewares/verifyHeader')
const api = require('./routes/api')
const express = require('express')
const Lists = require('./constants/Lists')
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(express.json())

app.use('*', verifyHeader.ssl)

app.use('/api', verifyHeader.auth, api)
app.use('/', express.static(path.resolve("src/front/dist")))
app.use('/indices', express.static(path.resolve("src/front/dist")))
app.use('/sobre/:ticker', express.static(path.resolve("src/front/dist")))
app.use('/contato', express.static(path.resolve("src/front/dist")))

let credencials = {
  key: fs.readFileSync(path.resolve("src/ssl/private.key")),
  cert: fs.readFileSync(path.resolve("src/ssl/certificate.crt")),
}

let httpServer = http.createServer(app)
let httpsServer = https.createServer(credencials, app)


httpServer.listen(80)
httpsServer.listen(443, () => {
  console.log("Servidor rodando nas portas 80 e 443");
  saveTickersInMemory.start()
  setInterval(() => {
    Lists.tickerInMemory = []
    saveTickersInMemory.start()
  }, 21600000);
});
