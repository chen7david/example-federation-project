const { dd } = require('funx-js')
module.exports = {

    loadContext: (req, res, next) =>{ 
        if(!req.ctx) req.ctx = {}
        next()
    },

    objectById: (Model) => async (req, res, next, id) =>{ 
        let key = Model.name.toLowerCase()
        const object = await Model.getById(id)
        if(!object) {
            const { error } = req.tools
            return next(error('invalid', key + ' id'))
        }else{
            if(!req.ctx.param) req.ctx.param = {}
            req.ctx.param[key] = object
            return next()
        }
    },
}