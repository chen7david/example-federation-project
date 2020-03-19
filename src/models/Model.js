const knexfile = require('./knexfile').development
const knex = require('knex')(knexfile)
const OM = require('objection-mixin')
const { Model } = require('objection')

Model.knex(knex)

class BaseModel extends OM(Model) {
 
    // add your base model code here ...
 
    $formatJson(json) {
        json = super.$formatJson(json)
        delete json.user_id
        delete json.password
        return json
    }
 
}

module.exports = BaseModel