

exports.up = knex => knex.schema.createTable('albuns', table => {
    table.increments('id')
    table.string('title').notNullable()
    table.integer('year').notNullable()
    table.integer('qtd_songs').notNullable().defaultTo(0)
    table.integer('duration').notNullable().defaultTo(0)
    table.integer('artist_id')
        .references('artists.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamps(true, true)
})


exports.down = knex => knex.schema.dropTable('albuns') 
