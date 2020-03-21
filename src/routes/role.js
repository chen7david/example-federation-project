const router = require('express-promise-router')()
const controller = require('../controller/role')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community, Role } = require('./../models')


router.param('communityId', objectById(Community))
router.param('roleId', objectById(Role))


router.route('/auth/community/:communityId/roles')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router