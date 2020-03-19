const express = require('express') 
const app = express()
const server = require('http').createServer(app)
const port = require('./../config').app.port || 4000
const { notifyStatusTo } = require('./middleware/notify')
const { invalidHandler, errorHandler, validationHandler } = require('./middleware/handlers')
const { cargo } = require('cargo-io')
const cors = require('cors')
const routes = require('./routes')
const { dd, serialChar, serialInt, randChar, randEl, randInt } = require('funx-js')

dd(serialChar("US0000000000"))

// APP MIDDLEWARE
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cargo())
app.use(notifyStatusTo('error'))
app.use(notifyStatusTo('validation'))

// APP ROUTES
app.use(routes.tenant)

// ERROR HANDLERS
app.use(validationHandler)
app.use(invalidHandler)
app.use(errorHandler)

server.listen(port, () => 
    dd(`sever running at http://localhost:${port}`))
