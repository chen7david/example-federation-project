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
        dd(param)
        res.status(200).json(cargo)
    },

    create: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { body } = req.ctx
        const object = await Cluster.create(body)
        cargo.payload = object
        cargo.details = info('created', 'cluster').render()
        res.status(200).json(cargo)
    },

    patch: async (req, res, next) => {
        const { cargo } = req.tools
        res.status(200).json(cargo)
    },

    delete: async (req, res, next) => {
        const { cargo } = req.tools
        res.status(200).json(cargo)
    },
}