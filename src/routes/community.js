const router = require('express-promise-router')()
const controller = require('../controller/community')
const { validateBody, schema } = require('../middleware/validation')
const { objectById } = require('./../middleware/loaders')
const { Community } = require('./../models')

router.param('id', objectById(Community))

router.route('/auth/communities')
    .get(controller.index)
    .post(validateBody(schema.community.create), controller.create)

router.route('/auth/communities/:id')
    .get(controller.view)
    .patch(validateBody(schema.community.patch), controller.patch)
    .delete(controller.delete)

module.exports = router