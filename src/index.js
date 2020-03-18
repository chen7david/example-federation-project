const express = require('express') 
const app = express()
const server = require('http').createServer(app)
const port = require('./../config').app.port || 4000
const { notifyStatusTo } = require('./middleware/notify')
const { invalidHandler, errorHandler } = require('./middleware/handlers')
const { cargo } = require('cargo-io')
const cors = require('cors')
const { dd } = require('funx-js')

// APP MIDDLEWARE
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cargo())
app.use(notifyStatusTo('error'))
app.use(notifyStatusTo('validation'))

// APP ROUTES
// here ...

// ERROR HANDLERS
app.use(invalidHandler)
app.use(errorHandler)

server.listen(port, () => 
    dd(`sever running at http://localhost:${port}`))