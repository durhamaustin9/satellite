const express = require('express')
const path = require('path')
const app = express()

app.use('/user', require(path.join(process.cwd(), '/routes/user')))
app.use('/satellite', require(path.join(process.cwd(), '/routes/satellite')))

module.exports = app
