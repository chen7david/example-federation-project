const { SchemaBuilder } = require('notify-io')
const { DefaultSchema, JoiSchema, ObjectionSchema } = require('notify-io-schemas')


const schema = new SchemaBuilder().merege({
    DefaultSchema: DefaultSchema(SchemaBuilder),
    JoiSchema: JoiSchema(SchemaBuilder),
    ObjectionSchema: ObjectionSchema(SchemaBuilder),
})

const notifyStatusTo = require('express-notify-io')(schema)

module.exports = { notifyStatusTo }