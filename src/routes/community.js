const router = require('express-promise-router')()
const controller = require('../controller/community')
const { validateBody, schema } = require('../middleware/validation')

router.route('/auth/communities')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router