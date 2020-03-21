const router = require('express-promise-router')()
const controller = require('../controller/user')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community, User } = require('./../models')


router.param('communityId', objectById(Community))
router.param('userId', objectById(User))

router.route('/auth/community/:communityId/users')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

router.route('/auth/community/:communityId/users/:userId')
    .get(controller.view)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router