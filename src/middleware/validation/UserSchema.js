const Joi = require('@hapi/joi')


module.exports = {

    login: Joi.object().options({abortEarly: false, stripUnknown: true}).keys({
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(6).required(),
    })
    
}