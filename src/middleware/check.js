const {dd} = require('funx-js')
module.exports = {
    requireAuth: (req, res, next) => {
        const { error } = req.tools
        const { $user } = req.ctx
        if(!$user) return next(error('required', 'authentication'))
        return next()
    }, 
    scopeToCluster: (resource) => (req, res, next) => {
        const { error } = req.tools
        const { $user, param } = req.ctx
        const cluster_id = param[resource] && param[resource].cluster_id
        if($user.community.cluster_id !== cluster_id)
        dd({$user, param, resource})
        next()
    }
}