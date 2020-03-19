const Model = require('./Model')

class Cluster extends Model {

    static get relationMappings(){ 

        const Community = require('./Community')

        return {
            communities:{
                relation: Model.HasManyRelation,
                modelClass: Community,
                join:{
                    from:'clusters.id',
                    to:'communities.cluster_id'
                }
            }
        }
    }
}

module.exports = Cluster