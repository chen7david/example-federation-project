exports.up = function(knex) {
  return knex.schema.createTable('tokens', (table) => {
    table.increments().primary()
    table.string('tokenId').unique().notNullable()
    table.integer('times_refreshed').defaultTo(0)
    table.boolean('revoked').defaultTo(false)
    table.boolean('active').defaultTo(true)
    table.jsonb('useragent')
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index().notNullable()
    table.integer('community_id').references('id').inTable('communities').onDelete('CASCADE').index().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tokens')
}