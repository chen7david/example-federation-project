const { dd } = require('funx-js')
const { Notify } = require('notify-io')
const { UniqueViolationError} = require('objection')
const { ValidationError } = require('@hapi/joi')

module.exports = {

    invalidHandler: (req, res, next) => {
        const { error } = req.tools
        next(error('invalid', 'request'))
    },

    validationHandler: (err, req, res, next) => {
        if(!(err instanceof ValidationError)) next()
        
        const { validation, cargo } = req.tools
        const { details, _original } = err

        // validation.originalTo(_original)
        dd({validation, details})
        const USD = [
            'any.required',
            'string.empty',
            'boolean.base',
            'number.base',
            'number.integer',
            'array.base'
        ]
        
        const MSD = [
            'string.min',
            'string.max',
            'any.only'
        ]
       
        for (let detail of details) {
            const { type, context: { label, key, limit, valids } } = detail
            let ref = valids ? valids[0].key : null
            if(USD.includes(type)) validation(type, label, key)
            if(MSD.includes(type)) validation(type, { label, limit, ref }, key)
        }

        next(validation())
    },

    errorHandler: (err, req, res, next) => {
        const { cargo, error } = req.tools
        dd({error})
        const errId = cargo.serial
        let msg = null

        if(err instanceof Notify) msg = err
        if(!msg) msg = error('unknown', errId)
        
        cargo.default = msg.langTo('zh').render()
        
        dd({errId:'ER' + errId, err})
        res.status(200).json(cargo)
    },
}