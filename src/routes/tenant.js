const router = require('express-promise-router')()
const controller = require('./../controller/tenant')
const { validateBody, schema } = require('../middleware/validation')

router.route('/')
    .get(validateBody(schema.tenant.create), controller.index)

module.exports = router