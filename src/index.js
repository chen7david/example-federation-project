const express = require('express') 
const app = express()
const server = require('http').createServer(app)
const Joi = require('@hapi/joi')
const { validateHeader, validateBody } = require('express-joi-validators')
 
app.use(express.json()) // This middleware is required for schemas validation to work.
app.use(express.urlencoded({ extended: true }))

const port = 5000