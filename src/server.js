const saveTickersInMemory = require("../src/services/saveTickersInMemory")
const verifyHeader = require('./Middlewares/verifyHeader')
const api = require('./routes/api')
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(express.json())

app.use('*', verifyHeader.ssl)

app.use('/api', verifyHeader.auth, api)
app.get('*', express.static(path.resolve("src/front/dist")))
// app.get('/indices', express.static(path.resolve("src/front/dist")))
// app.get('/sobre/:ticker', express.static(path.resolve("src/front/dist")))
// app.get('/contato', express.static(path.resolve("src/front/dist")))

const credencials = {
  key: fs.readFileSync(path.resolve("src/ssl/private.key")),
  cert: fs.readFileSync(path.resolve("src/ssl/certificate.crt")),
}

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credencials, app)


httpServer.listen(80)
httpsServer.listen(443, () => {
  console.log("Servidor rodando na porta 443");
  saveTickersInMemory.start()
  setInterval(() => {
    saveTickersInMemory = []
    saveTickersInMemory.start()
  }, 21600000);
});
