exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary()
    table.unique(['community_id', 'username'])
    table.string('userId').unique().notNullable()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.boolean('verified').defaultTo(false)
    table.boolean('disabled').defaultTo(false)
    table.integer('community_id').references('id').inTable('communities').onDelete('CASCADE').index().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}