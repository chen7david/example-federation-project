exports.up = function(knex) {
  return knex.schema.createTable('permissions', (table) => {
    table.increments().primary()
    table.unique(['community_id', 'resource_name'])
    table.string('resource_name').notNullable()
    table.string('action').notNullable()
    table.text('description')
    table.integer('community_id').references('id').inTable('communities').onDelete('CASCADE').index().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('permissions')
}