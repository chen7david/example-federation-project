const { validateHeader, validateBody } = require('express-joi-validators')

const schema = {
    cluster: require('./ClusterSchema'),
    community: require('./CommunitySchema'),
    user: require('./UserSchema'),
    role: require('./RoleSchema'),
    permission: require('./PermissionSchema'),
    token: require('./TokenSchema'),
    account: require('./AccountSchema'),
}

module.exports = {
    validateHeader,
    validateBody,
    schema
}