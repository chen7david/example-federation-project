const router = require('express-promise-router')()
const controller = require('./../controller/cluster')
const { objectById, testLoader } = require('./../middleware/loaders')
const { Cluster } = require('./../models')
const { validateBody, schema } = require('../middleware/validation')

router.param('id', objectById(Cluster))

router.route('/auth/clusters')
    .get(controller.index)
    .post(validateBody(schema.cluster.create), controller.create)
    

router.route('/auth/clusters/:id')
    .get(controller.view)
    .patch(validateBody(schema.cluster.patch), controller.patch)
    .delete(controller.delete)

module.exports = router