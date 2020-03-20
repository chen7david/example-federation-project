const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        name: Joi.string().required().lowercase().min(1).max(120).trim(),
        description: Joi.string().allow(null).trim(),
        activated: Joi.boolean(),
        access_token_expiry: Joi.number().label('access token expiry').integer().min(0),
        refresh_token_expiry: Joi.number().label('refresh token expiry').integer().min(0),
        allow_token_refresh: Joi.boolean().label('allow token refresh'),
        user_verification_required: Joi.boolean().label('user verification'),
        user_blacklist_enabled: Joi.boolean().label('user blacklist'),
        max_user_allowance: Joi.number().label('max user allowance').integer().min(0)
    }),

    patch: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        name: Joi.string().lowercase().min(1).max(120).trim(),
        description: Joi.string().allow(null).trim(),
        activated: Joi.boolean(),
        access_token_expiry: Joi.number().label('access token expiry').integer().min(0),
        refresh_token_expiry: Joi.number().label('refresh token expiry').integer().min(0),
        allow_token_refresh: Joi.boolean().label('allow token refresh'),
        user_verification_required: Joi.boolean().label('user verification'),
        user_blacklist_enabled: Joi.boolean().label('user blacklist'),
        max_user_allowance: Joi.number().label('max user allowance').integer().min(0)
    })
}
		
