exports.up = function(knex) {
  return knex.schema.createTable('role_permissions', (table) => {
    table.increments().primary()
    table.unique(['permission_id', 'role_id'])
    table.integer('permission_id').references('id').inTable('permissions').onDelete('CASCADE').index().notNullable()
    table.integer('role_id').references('id').inTable('roles').onDelete('CASCADE').index().notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('role_permissions')
}