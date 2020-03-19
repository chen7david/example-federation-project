const express = require('express') 
const app = express()
const server = require('http').createServer(app)
const port = require('./../config').app.port || 4000
const { notifyStatusTo } = require('./middleware/notify')
const { invalidHandler, errorHandler, validationHandler } = require('./middleware/handlers')
const { cargo } = require('cargo-io')
const cors = require('cors')
const routes = require('./routes')
const { dd, serialChar } = require('funx-js')

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



const { Cluster, Community, User, Role, Permission, Token } = require('./models')
const data = {
    cluster: {
        name: serialChar("0000000"),
        // name: 'duplicate'
    },
    community: {
        name: serialChar("0000000"),
        // name: 'duplicate'
    },
    user: {
        username: serialChar("0000000"),
        password: "888888"
    },
    role: {
        name: serialChar("0000000")
    },
    permission: {
        resource_name: serialChar("0000000"),
        actions: serialChar("0000000")
    }, 
    token: {}  
}

const main = async () => {
    const obj = await Cluster
        .query()
        // .insert(data.cluster)
    dd({obj})
}

main()