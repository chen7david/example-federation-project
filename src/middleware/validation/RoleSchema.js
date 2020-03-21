const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        name: Joi.string().lowercase().min(1).max(120).required().trim(),
        description: Joi.string().allow(null),
    }),

    patch: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        name: Joi.string().lowercase().min(1).max(120).trim(),
        description: Joi.string().allow(null).trim(),
    }),

    syncUsers: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        userIds: Joi.array(),
    }),

    syncPermissions: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        permissionIds: Joi.array().required(),
    }),
    
}