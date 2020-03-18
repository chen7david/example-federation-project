const Joi = require('@hapi/joi')


module.exports = {

    create: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        name: Joi.string().lowercase().required(),
        description: Joi.string().allow(null),


        username: Joi.string().lowercase().min(2).max(5).required(),
    pass_word: Joi.string().min(2).max(7).required(),
    user_name: Joi.string().lowercase().label('username').required(),
    allow_delete: Joi.boolean().label('allow delete').required(),
    community_limit: Joi.number().integer().label('community limit').required(),
    roleIds: Joi.array().required(),
    passwordConfirm: Joi.any().valid(Joi.ref('pass_word')).label('Password-Confirm')
    })
    
}