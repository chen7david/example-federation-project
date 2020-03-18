const { validateHeader, validateBody } = require('express-joi-validators')

const schema = {
    tenant: require('./TenantSchema'),
    user: require('./UserSchema'),
}

module.exports = {
    validateHeader,
    validateBody,
    schema
}