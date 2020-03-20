const express = require('express') 
const app = express()
const server = require('http').createServer(app)
const port = require('./../config').app.port || 4000
const { notifyStatusTo } = require('./middleware/notify')
const { invalidHandler, errorHandler, validationHandler } = require('./middleware/handlers')
const { cargo } = require('cargo-io')
const cors = require('cors')
const { requireAuth } = require('./middleware/check')
const { loadContext } = require('./middleware/loaders')
const routes = require('./routes')
const { dd, serialChar } = require('funx-js')

// APP MIDDLEWARE
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cargo())
app.use(notifyStatusTo('error'))
app.use(notifyStatusTo('validation'))
app.use(loadContext)

// REQUEST CHECKS
// app.use('/auth', requireAuth)

// APP ROUTES
app.use(routes.cluster)
app.use(routes.community)
app.use(routes.user)
app.use(routes.role)
app.use(routes.permission)
app.use(routes.token)

// ERROR HANDLERS
app.use(validationHandler)
app.use(invalidHandler)
app.use(errorHandler)


server.listen(port, () => 
    dd(`sever running at http://localhost:${port}`))


const main = async () => {

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
        action: serialChar("0000000")
    }, 
    token: {}  
}

    // const user = await User
        // .query()
        // .withGraphFetched('community.[cluster]')
        // .where('userId', 'US3XBAUU1VCX')
        // .first()
        // .getEagerByKey('id',3)
    // const comm = await user.$relatedQuery('com')
    // dd({user})

    const cluster = await Cluster
    //     .getById(3)
        .query()
        .insert(data.cluster)
    // const community = await cluster
    //     .$relatedQuery('communities')
    //     .insert(data.community)
        // .first()

    // const user = await community
    //     .$relatedQuery('users')
    //     .insert(data.user)
        // .first()
    // const tokens = await user.$relatedQuery('tokens')
    // await user.$sync('roles',[1,2,4])
    // const token = await user
    //     .$relatedQuery('tokens')
    //     .insert({community_id: user.community_id })

    // const role = await community
    //     .$relatedQuery('roles')
    //     .insert(data.role)
    //     .first()

    // await role.$sync('users',[1,2,4])
    // await role.$sync('permissions',[])
    
    // const permission = await community
    //     .$relatedQuery('permissions')
    //     .insert(data.permission)
    //     .first()
    // await permission.$sync('roles',[1,2])
    

    // dd({cluster, community, user, role, permission, token, tokens})
}

// main()