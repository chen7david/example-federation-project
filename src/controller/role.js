const { Role } = require('./../models')
const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const roles = await param.community.$relatedQuery('roles')
        cargo.payload(roles)
        res.status(200).json(cargo)
    },

    view: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        cargo.payload(param.role)
        res.status(200).json(cargo)
    },

    create: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const role = await param.community
            .$relatedQuery('roles')
            .insert(body)
            .returning('*')
        cargo.payload(role)
        cargo.details(info('created', 'role').render())
        res.status(201).json(cargo)
    },

    patch: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const role = await param.role
            .$query()
            .patch(body)
            .returning('*')
        cargo.payload(role)
        cargo.details(info('updated', 'role').render())
        res.status(200).json(cargo)
    },

    delete: async (req, res, next) => {
        const { cargo, info, error } = req.tools
        const { param } = req.ctx
        if(param.role.root) return next(error('forbidden','operation'))
        const deleted = await param.role
            .$query()
            .delete()
        cargo.payload({deleted: true}) 
        cargo.details(info('deleted', 'role').render())
        res.status(200).json(cargo)
    },

    getUsers: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const users = await param.role
            .$relatedQuery('users')
        cargo.payload(users) 
        res.status(200).json(cargo)
    },

    syncUsers: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx

        let target = await param.community
            .$relatedQuery('users')
            .whereIn('id', body.userIds)

        const users = await param.role
            .$sync('users', target.map(el => el.id))
        
        cargo.payload({synced: true}) 
        cargo.details(info('updated', 'role-users').render())
        res.status(200).json(cargo)
    },

    getPermissions: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const permissions = await param.role
            .$relatedQuery('permissions')
        cargo.payload(permissions) 
        res.status(200).json(cargo)
    },

    syncPermissions: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx

        let target = await param.community
            .$relatedQuery('permissions')
            .whereIn('id', body.permissionIds)

        const permissions = await param.role
            .$sync('permissions', target.map(el => el.id))
        
        cargo.payload({synced: true}) 
        cargo.details(info('updated', 'role-permissions').render())
        res.status(200).json(cargo)
    },
}