const Model = require('./Model')
const bcrypt = require('bcrypt')
const BCRYPT_ROUNDS = 12
const { serialChar } = require('funx-js')

class User extends Model {
 
    async $beforeInsert(context){
        await super.$beforeInsert(context)
        if(this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
        this.userId = serialChar("US0000000000")
    }
 
    async $beforeUpdate(context){
        await super.$beforeInsert(context)
        if(this.password) this.password = await bcrypt
            .hash(this.password, BCRYPT_ROUNDS)
    }

    async verifyPassword(password){
        return await bcrypt.compare(password, this.password)    
    }
 
}

module.exports = User