const { validateHeader, validateBody } = require('express-joi-validators')

const schema = {
    user: require('./UserSchema')
}

module.exports = {
    validateHeader,
    validateBody,
    schema
}