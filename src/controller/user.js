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
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const user = await param.community
            .$relatedQuery('users')
            .insert(body)
            .returning('*')
        cargo.payload(user)
        cargo.details(info('created', 'user').render())
        res.status(201).json(cargo)
    },

    patch: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const user = await param.user
            .$query()
            .patch(body)
            .returning('*')
        cargo.payload(user)
        cargo.details(info('updated', 'user').render())
        res.status(200).json(cargo)
    },

    delete: async (req, res, next) => {
        const { cargo, info, error } = req.tools
        const { $user, param } = req.ctx
        // if is admin also don't delete
        if(param.user.id == $user.id) return next(error('forbidden','operation'))
        const deleted = await param.user
            .$query()
            .delete()
        cargo.payload({deleted: true}) 
        cargo.details(info('deleted', 'user').render())
        res.status(200).json(cargo)
    },

    getRoles: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const roles = await param.user
            .$relatedQuery('roles')
        cargo.payload(roles) 
        res.status(200).json(cargo)
    },

    syncRoles: async (req, res, next) => {
        const { cargo, info, error } = req.tools
        const { $user, param, body } = req.ctx

        let target = await param.community
            .$relatedQuery('roles')
            .whereIn('id', body.roleIds)

        const roles = await param.user
            .$sync('roles', target.map(el => el.id))
        
        dd({target, roles})
        cargo.payload({synced: true}) 
        cargo.details(info('updated', 'user-roles').render())
        res.status(200).json(cargo)
    },
}