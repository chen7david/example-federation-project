const router = require('express-promise-router')()
const controller = require('../controller/user')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community, User } = require('./../models')


router.param('communityId', objectById(Community))
router.param('userId', objectById(User))

router.route('/auth/community/:communityId/users')
    .get(controller.index)
    .post(validateBody(schema.user.create), controller.create)

router.route('/auth/community/:communityId/users/:userId')
    .get(controller.view)
    .patch(validateBody(schema.user.update), controller.patch)
    .delete(controller.delete)
    

module.exports = router