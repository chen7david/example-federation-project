const Model = require('./Model')

class Permission extends Model {
    
    static get relationMappings(){   
        
        const Community = require('./Community')
        const Role = require('./Role')
        
        return {
            community:{
                relation: Model.BelongsToOneRelation,
                modelClass: Community,
                join:{
                    from:'permissions.community_id',
                    to:'community.id'
                }
            },
            roles:{
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join:{
                    from:'permissions.id',
                    to:'roles.id',
                    through:{
                        from:'role_permissions.permission_id',
                        to:'role_permissions.role_id'
                    }
                }
            }  
        }
    }
}

module.exports = Permission