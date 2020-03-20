const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(6).max(120).required(),
        verified: Joi.boolean(),
        disabled: Joi.boolean(),
    }),

    update: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(6).max(120).required(),
        verified: Joi.boolean(),
        disabled: Joi.boolean(),
    }),

    login: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(6).required(),
    })
    
}