const router = require('express-promise-router')()
const controller = require('../controller/user')
const { validateBody, schema } = require('../middleware/validation')

router.route('/auth/users')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router