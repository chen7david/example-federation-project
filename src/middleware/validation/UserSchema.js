const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(6).max(120).required(),
        verified: Joi.boolean(),
        disabled: Joi.boolean(),
    }),

    patch: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        username: Joi.string().lowercase(),
        password: Joi.string().min(6).max(120),
        verified: Joi.boolean(),
        disabled: Joi.boolean(),
    }),

    syncRoles: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        roleIds: Joi.array().required(),
    }),    
}