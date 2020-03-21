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
        try {
            if(!req.ctx) req.ctx = {}
            const { error } = req.tools
            const user = await User.getEagerByKey('userId', 'US3XBAUU1VCX')
            if(!user) return next(error('invalid', 'user id'))
            req.ctx.$user = user
            return next()
        } catch (err) {
            next(err)
        }
    },

    objectById: (Model) => async (req, res, next, id) => { 
        try {
            let key = Model.name.toLowerCase()
            let object = null
            let children = [ 'user', 'role', 'permission', 'token']
            const { $user } = req.ctx
            if(key = 'cluster') object = await Model.getById(id)
            if(key = 'community') object = await $user.community.cluster
                .$relatedQuery('communities')
                .where('id', id)
                .first()
            if(children.includes(key)) object = await Model
                .query()
                .where('id', 'id')
                .andWhere('community_id', $user.community_id)
                .first()
                
            if(!object) {
                const { error } = req.tools
                next(error('invalid', key + ' id'))
            }else{
                if(!req.ctx.param) req.ctx.param = {}
                req.ctx.param[key] = object
                return next()
            }
        } catch (err) {
            next(err)
        }
    },
}