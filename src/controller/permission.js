const { Permission } = require('./../models')
const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const permissions = await param.community.$relatedQuery('permissions')
        cargo.payload(permissions)
        res.status(200).json(cargo)
    },

    view: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        cargo.payload(param.permission)
        res.status(200).json(cargo)
    },

    create: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const permission = await param.community
            .$relatedQuery('permissions')
            .insert(body)
            .returning('*')
        cargo.payload(permission)
        cargo.details(info('created', 'permission').render())
        res.status(201).json(cargo)
    },

    patch: async (req, res, next) => {
        const { cargo, info } = req.tools
        const { param, body } = req.ctx
        const permission = await param.permission
            .$query()
            .patch(body)
            .returning('*')
        cargo.payload(permission)
        cargo.details(info('updated', 'permission').render())
        res.status(200).json(cargo)
    },

    delete: async (req, res, next) => {
        const { cargo, info, error } = req.tools
        const { param } = req.ctx
        const deleted = await param.permission
            .$query()
            .delete()
        cargo.payload({deleted: true}) 
        cargo.details(info('deleted', 'permission').render())
        res.status(200).json(cargo)
    },

    getRoles: async (req, res, next) => {
        const { cargo } = req.tools
        const { param } = req.ctx
        const roles = await param.permission
            .$relatedQuery('roles')
        cargo.payload(roles) 
        res.status(200).json(cargo)
    },

    syncRoles: async (req, res, next) => {
        const { cargo, info, error } = req.tools
        const { param, body } = req.ctx

        let target = await param.community
            .$relatedQuery('roles')
            .whereIn('id', body.roleIds)

        const roles = await param.permission
            .$sync('roles', target.map(el => el.id))
        
        cargo.payload({synced: true}) 
        cargo.details(info('updated', 'user-roles').render())
        res.status(200).json(cargo)
    },
}