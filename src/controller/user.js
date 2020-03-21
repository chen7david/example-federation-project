const { User } = require('./../models')
const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const users = await param.community.$relatedQuery('users')
        cargo.payload(users)
        res.status(200).json(cargo)
    },

    view: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        cargo.payload(param.user)
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