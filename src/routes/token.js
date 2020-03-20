const router = require('express-promise-router')()
const controller = require('../controller/token')
const { validateBody, schema } = require('../middleware/validation')

router.route('/auth/tokens')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router