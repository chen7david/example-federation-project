const { Cluster } = require('../models')
const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => {
        const { cargo } = req.tools
        cargo.playload = await Cluster.query()
        res.status(200).json(cargo)
    },

    view: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        cargo.details = param.cluster
        res.status(200).json(cargo)
    },

    create: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { body } = req.ctx
        const object = await Cluster.create(body)
        cargo.payload = object
        cargo.details = info('created', 'cluster').render()
        res.status(201).json(cargo)
    },

    patch: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const object = await param.cluster
            .$query()
            .patch(body)
        cargo.payload = object
        cargo.details = info('updated', 'cluster').render()
        res.status(200).json(cargo)
    },

    delete: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param } = req.ctx
        const object = await param.cluster
            .$query()
            .delete()
        cargo.payload = object
        cargo.details = info('deleted', 'cluster').render()
        res.status(200).json(cargo)
    },
}