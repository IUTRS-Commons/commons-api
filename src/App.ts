require('dotenv').config()
const express = require('express')
const parser = require('body-parser')

const app = new express()
const port = process.env.API_PORT || 3000

// MIDDLEWARES

// ROUTES
require('./routes/commons/Welcome').bind(app)

app.listen(port, () => console.log(`API listening on port: ${port}`))
