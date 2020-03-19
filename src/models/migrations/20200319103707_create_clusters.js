exports.up = function(knex) {
	return knex.schema.createTable('clusters', (table) => {
		table.increments().primary()
		table.string('name').unique().notNullable()
		table.text('description')
		table.timestamps(true, true)
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('clusters')
}