const Model = require('./Model')

class Role extends Model {
    
    static get relationMappings(){   
        
        const Community = require('./Community')
        const User = require('./User')
        const Permission = require('./Permission')
        
        return {
            community:{
                relation: Model.BelongsToOneRelation,
                modelClass: Community,
                join:{
                    from:'roles.community_id',
                    to:'communities.id'
                }
            },
            users:{
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join:{
                    from:'roles.id',
                    to:'users.id',
                    through:{
                        from:'user_roles.role_id',
                        to:'user_roles.user_id'
                    }
                }
            },
            permissions:{
                relation: Model.ManyToManyRelation,
                modelClass: Permission,
                join:{
                    from:'roles.id',
                    to:'permissions.id',
                    through:{
                        from:'role_permissions.role_id',
                        to:'role_permissions.permission_id'
                    }
                }
            }  
        }
    }
}

module.exports = Role