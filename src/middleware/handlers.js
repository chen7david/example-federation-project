const { dd } = require('funx-js')
const { Notify } = require('notify-io')
const { UniqueViolationError} = require('objection')
const { ValidationError } = require('@hapi/joi')

module.exports = {

    invalidHandler: (req, res, next) => {
        const { error } = req.tools
        // throw('ddf')
        next(error('invalid', 'request'))
    },

    errorHandler: (err, req, res, next) => {
        const { cargo, error } = req.tools
        const errId = cargo.serial
        let msg = null

        if(err instanceof Notify) msg = err
        if(!msg) msg = error('unknown', errId)
        
        cargo.default = msg.langTo('en').render()
        
        dd({errId:'ER' + errId, err})
        res.status(200).json(cargo)
    },
}