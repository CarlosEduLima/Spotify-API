

exports.up = knex => knex.schema.createTable('plays', table => {
    table.increments('id')
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    table.integer('playlist_id')
        .references('playlists.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamps(true, true)
})


exports.down = knex => knex.schema.dropTable('plays') 
