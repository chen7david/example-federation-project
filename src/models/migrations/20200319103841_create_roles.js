exports.up = function(knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments().primary()
    table.unique(['community_id', 'name'])
    table.string('name').notNullable()
    table.text('description')
    table.boolean('root').defaultTo(false)
    table.integer('community_id').references('id').inTable('communities').onDelete('CASCADE').index().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('roles')
}