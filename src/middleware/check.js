const {dd} = require('funx-js')
module.exports = {
    requireAuth: (req, res, next) => {
        const { error } = req.tools
        const { $user } = req.ctx
        
        if(!$user) next(error('required', 'authentication'))
        
        next()
    }
}