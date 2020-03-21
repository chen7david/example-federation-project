const router = require('express-promise-router')()
const controller = require('../controller/role')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community, Role } = require('./../models')


router.param('communityId', objectById(Community))
router.param('roleId', objectById(Role))


router.route('/auth/community/:communityId/roles')
    .get(controller.index)
    .post(validateBody(schema.role.create), controller.create)

router.route('/auth/community/:communityId/roles/:roleId')
    .get(controller.view)
    .patch(validateBody(schema.role.patch), controller.patch)
    .delete(controller.delete)

router.route('/auth/community/:communityId/role-users/:roleId')
    .get(controller.getUsers)
    .patch(validateBody(schema.user.syncUsers), controller.syncUsers)

router.route('/auth/community/:communityId/role-permissions/:roleId')
    .get(controller.getPermissions)
    .patch(validateBody(schema.user.syncPermissions), controller.syncPermissions)

module.exports = router