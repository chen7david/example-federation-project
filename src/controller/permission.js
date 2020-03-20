const { Permission } = require('./../models')
const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => {
        const { cargo } = req.tools
        cargo.playload = await Permission.query()
        res.status(200).json(cargo)
    },

    view: async (req, res, next) => {
        const { cargo } = req.tools
        res.status(200).json(cargo)
    },

    create: async (req, res, next) => {
        const { cargo } = req.tools
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