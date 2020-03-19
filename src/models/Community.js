const Model = require('./Model')

class Community extends Model {

    async $beforeInsert(context){
        await super.$beforeInsert(context)
        this.client_id = this.hash().md5
        this.client_secret = this.hash().md5
    }

    static get relationMappings(){ 

        const Cluster = require('./Cluster')
        const Token = require('./Token')
        const User = require('./User')

        return {
            cluster:{
                relation: Model.BelongsToOneRelation,
                modelClass: Cluster,
                join:{
                    from:'communities.cluster_id',
                    to:'clusters.id'
                }
            },
            users:{
                relation: Model.HasManyRelation,
                modelClass: User,
                join:{
                    from:'communities.id',
                    to:'users.community_id'
                }
            },
            tokens:{
                relation: Model.HasManyRelation,
                modelClass: Token,
                join:{
                    from:'communities.id',
                    to:'tokens.community_id'
                }
            },
        }
    }
}

module.exports = Community