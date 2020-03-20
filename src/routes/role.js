const router = require('express-promise-router')()
const controller = require('../controller/role')
const { validateBody, schema } = require('../middleware/validation')

router.route('/auth/roles')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router