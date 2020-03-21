const router = require('express-promise-router')()
const controller = require('./../controller/cluster')
const { objectById } = require('./../middleware/loaders')
const { Cluster } = require('./../models')
const { validateBody, schema } = require('../middleware/validation')

router.param('clusterId', objectById(Cluster))

router.route('/auth/clusters')
    .get(controller.index)
    .post(validateBody(schema.cluster.create), controller.create)
    

router.route('/auth/clusters/:clusterId')
    .get(controller.view)
    .patch(validateBody(schema.cluster.patch), controller.patch)
    .delete(controller.delete)

module.exports = router