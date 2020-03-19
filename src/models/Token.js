const Model = require('./Model')
const { serialChar } = require('funx-js')

class Token extends Model {

    async $beforeInsert(context){
        await super.$beforeInsert(context)
        this.tokenId = serialChar("TO00-00000000-00000-00000")
    }
    
    static get relationMappings(){   
        
        const Community = require('./Community')
        const User = require('./User')
        
        return {
            community:{
                relation: Model.BelongsToOneRelation,
                modelClass: Community,
                join:{
                    from:'communities.id',
                    to:'tokens.community_id'
                }
            },
            user:{
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join:{
                    from:'tokens.user_id',
                    to:'users.id'
                }
            }, 
        }
    }
}

module.exports = Token