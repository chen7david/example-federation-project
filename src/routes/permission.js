const router = require('express-promise-router')()
const controller = require('../controller/permission')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community, Permission } = require('./../models')


router.param('communityId', objectById(Community))
router.param('permissionId', objectById(Permission))


router.route('/auth/community/:communityId/permissions')
    .get(controller.index)
    .post(validateBody(schema.permission.create), controller.create)

router.route('/auth/community/:communityId/permissions/:permissionId')
    .get(controller.view)
    .patch(validateBody(schema.permission.patch), controller.patch)
    .delete(controller.delete)

module.exports = router