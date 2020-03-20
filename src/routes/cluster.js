const router = require('express-promise-router')()
const controller = require('./../controller/cluster')
const { objectById } = require('./../middleware/loaders')
const { Cluster } = require('./../models')
const { validateBody, schema } = require('../middleware/validation')

router.param('id', objectById(Cluster))

router.route('/auth/clusters')
    .get(controller.index)
    // .get(validateBody(schema.tenant.create), controller.index)

router.route('/auth/clusters/:id')
    .get(controller.view)

module.exports = router