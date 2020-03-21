const router = require('express-promise-router')()
const controller = require('../controller/community')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community } = require('./../models')

router.param('communityId', objectById(Community))

router.route('/auth/communities')
    .get(controller.index)
    .post(validateBody(schema.community.create), controller.create)

router.route('/auth/communities/:communityId')
    .get(controller.view)
    .patch(validateBody(schema.community.patch), controller.patch)
    .delete(controller.delete)

router.route('/auth/community-roles/:communityId')
    .get(controller.getRoles)

router.route('/auth/community-permissions/:communityId')
    .get(controller.getPermissions)

router.route('/auth/community-tokens/:communityId')
    .get(controller.getTokens)

module.exports = router