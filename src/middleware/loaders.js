const { dd } = require('funx-js')
module.exports = {

    loadContext: (req, res, next) =>{ 
        if(!req.ctx) req.ctx = {}
        return next()
    },

    objectById: (Model) => (req, res, next, id) => { 
        // let key = Model.name.toLowerCase()
        // const object =  Model.getById(id)
        if(true) {
            const { error } = req.tools
            next(error('invalid',  ' id'))
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