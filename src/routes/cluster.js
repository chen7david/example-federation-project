const router = require('express-promise-router')()
const controller = require('./../controller/cluster')
const { validateBody, schema } = require('../middleware/validation')

router.route('/auth/clusters')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

module.exports = router