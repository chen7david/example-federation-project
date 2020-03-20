const {dd} = require('funx-js')
module.exports = {
    requireAuth: (req, res, next) => {
        const { error } = req.tools
        const { $user } = req.ctx
        dd('requireAuth')
        if(!$user) return next(error('required', 'authentication'))
        return next()
    }
}