exports.up = function(knex) {
	return knex.schema.createTable('communities', (table) => {
		table.increments().primary()
		table.unique(['cluster_id', 'name'])
		table.string('name').notNullable()
		table.text('description')
        table.string('client_id').unique().notNullable()
        table.string('client_secret')
        table.boolean('activated').defaultTo(false)
		table.integer('access_token_expiry').defaultTo(30)
		table.integer('refresh_token_expiry').defaultTo(30)
        table.boolean('allow_token_refresh').defaultTo(false)
        table.boolean('user_verification_required').defaultTo(false)
        table.boolean('user_blacklist_enabled').defaultTo(false)
        table.integer('max_user_allowance').defaultTo(0)
        table.boolean('root').defaultTo(false)
		table.integer('cluster_id').references('id').inTable('clusters').onDelete('CASCADE').index().notNullable()
		table.timestamps(true, true)
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('communities')
}