const { validateHeader, validateBody } = require('express-joi-validators')

const schema = {
    cluster: require('./ClusterSchema'),
    user: require('./UserSchema'),
}

module.exports = {
    validateHeader,
    validateBody,
    schema
}