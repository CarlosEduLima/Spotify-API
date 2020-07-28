

exports.up = knex => knex.schema.createTable('songs', table => {
    table.increments('id')
    table.string('title').notNullable()
    table.integer('year').notNullable()
    table.integer('duration').notNullable()
    table.integer('album_id')
        .references('albuns.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamps(true, true)
})


exports.down = knex => knex.schema.dropTable('songs') 
