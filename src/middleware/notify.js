const { Notify, SchemaBuilder } = require('notify-io')
const { DefaultSchema, JoiSchema, ObjectionSchema } = require('notify-io-schemas')


const schema = new SchemaBuilder().merege({
    DefaultSchema: DefaultSchema(SchemaBuilder),
    JoiSchema: JoiSchema(SchemaBuilder),
    ObjectionSchema: ObjectionSchema(SchemaBuilder),
})

console.log(schema.keys())

const instance = () => new Notify(schema)
const notifyStatusTo = require('express-notify-io')(instance)

module.exports = { notifyStatusTo }