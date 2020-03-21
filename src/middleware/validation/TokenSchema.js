const Joi = require('@hapi/joi')


module.exports = {

    patch: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        revoked: Joi.boolean(),
    })
    
}