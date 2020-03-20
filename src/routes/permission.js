const router = require('express-promise-router')()
const controller = require('../controller/permission')
const { validateBody, schema } = require('../middleware/validation')

router.route('/auth/permissions')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router