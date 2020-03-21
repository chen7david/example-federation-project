const { Community } = require('./../models')
const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => {
        const { cargo } = req.tools
        const { $user } = req.ctx
        const communities = await $user.community.cluster
            .$relatedQuery('communities')
        cargo.payload(communities) 
        res.status(200).json(cargo)
    },

    view: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        cargo.payload(param.community) 
        res.status(200).json(cargo)
    },

    create: async (req, res, next) => {
        const { cargo } = req.tools
        const { $user, body } = req.ctx
        const community = await $user.community.cluster
            .$relatedQuery('communities')
            .insert(body)
            .returning('*')
        cargo.payload(community) 
        res.status(200).json(cargo)
    },

    patch: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const community = await param.community
            .$query()
            .patch(body).returning('*')
        cargo.payload(community) 
        cargo.details(info('updated', 'community').render())
        res.status(200).json(cargo)
    },

    delete: async (req, res, next) => {
        const { cargo } = req.tools
        res.status(200).json(cargo)
    },
}