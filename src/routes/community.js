const router = require('express-promise-router')()
const controller = require('../controller/community')
const { validateBody, schema } = require('../middleware/validation')

// router.route('/auth/cluster/:id/communities')
//     .get(controller.index)
//     .get(validateBody(schema.community.create), controller.index)

router.route('/auth/communities')
    .get(controller.index)
    .post(validateBody(schema.community.create), controller.create)

module.exports = router