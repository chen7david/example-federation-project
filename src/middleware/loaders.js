const { User } = require('./../models')
const { dd } = require('funx-js')
module.exports = {

    setContext: (req, res, next) =>{ 
        if(!req.ctx) req.ctx = {}
        // set lang on notifications
        // req.tools.info().langTo('zh')
        return next()
    },

    Authenticate: async (req, res, next) =>{ 
        if(!req.ctx) req.ctx = {}
        const { error } = req.tools
        const user = await User.getEagerByKey('userId', 'USC3GKF70V7Q')
        if(!user) return next(error('invalid', 'user id'))
        req.ctx.$user = user
        return next()
    },

    objectById: (Model) => async (req, res, next, id) => { 
        let key = Model.name.toLowerCase()
        const object = await Model.getById(id)
        if(!object) {
            const { error } = req.tools
            next(error('invalid', key + ' id'))
        }else{
            if(!req.ctx.param) req.ctx.param = {}
            req.ctx.param[key] = object
            return next()
        }
    },
}