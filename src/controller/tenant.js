const { dd } = require('funx-js')

module.exports = {
    index: async (req, res, next) => next('this is an error, but nothing went wrong ;P')
}