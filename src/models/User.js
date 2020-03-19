const Model = require('./Model')
const bcrypt = require('bcrypt')
const BCRYPT_ROUNDS = 12

class User extends Model {
 
    // example of extending your model with bycript package
 
    async verifyPassword(password){
        return await bcrypt.compare(password, this.password)    
    }
 
    async $beforeInsert(context){
        await super.$beforeInsert(context)
        if(this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }
 
    async $beforeUpdate(context){
        await super.$beforeInsert(context)
        if(this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }
 
}

module.exports = User