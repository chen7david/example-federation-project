const knexfile = require('./../../knexfile').development
const knex = require('knex')(knexfile)
const OM = require('objection-mixin')
const { Model } = require('objection')

Model.knex(knex)

class BaseModel extends OM(Model) {
 
    // add your base model code here ...

    $afterFind(context) {
        this.created_at = this.created_at.toLocaleString()
        this.updated_at = this.updated_at.toLocaleString()
        return this
    }
 
    $formatJson(json) {
        json = super.$formatJson(json)
        delete json.user_id
        delete json.cluster_id
        delete json.password        
        json.created_at = json.created_at.toLocaleString()
        json.updated_at = json.updated_at.toLocaleString()
        return json
    }

    static async create(object){
        const result = await super
            .query()
            .insert(object)
            .returning('*')
        return result
    }
 
}

module.exports = BaseModel