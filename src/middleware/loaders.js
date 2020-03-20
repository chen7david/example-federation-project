const { dd } = require('funx-js')
module.exports = {

    loadContext: (req, res, next) =>{ 
        if(!req.ctx) req.ctx = {}
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

    testLoader: async (req, res, next, id) => {
        try {
            
            throw('dd')
            dd({id})
            next()
        } catch (error) {
            dd('dddd')
            return next('error is in test param')
        }
    }
}