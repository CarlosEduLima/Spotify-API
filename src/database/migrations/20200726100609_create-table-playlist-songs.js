

exports.up = knex => knex.schema.createTable('playlist_songs', table => {
    table.increments('id')
    table.integer('song_id')
        .references('songs.id')
        .notNullable()
        .onDelete('CASCADE')
    table.integer('playlist_id')
        .references('playlists.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamps(true, true)
})


exports.down = knex => knex.schema.dropTable('playlist_songs') 
