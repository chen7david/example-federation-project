const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        resource_name: Joi.string().label('resource name').lowercase().min(1).max(120).required().trim(),
        action: Joi.string().allow(null),
    }),

    patch: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        resource_name: Joi.string().label('resource name').lowercase().min(1).max(120).trim(),
        action: Joi.string().allow(null).trim(),
    }),
    
    syncRoles: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        roleIds: Joi.array(),
    }),
}