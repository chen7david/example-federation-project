const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        name: Joi.string().lowercase().required(),
        description: Joi.string().allow(null),
    })
    
}