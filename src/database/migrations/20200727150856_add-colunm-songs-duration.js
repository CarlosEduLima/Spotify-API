

exports.up = knex => knex.schema.alterTable('playlists', conlumn => {
    conlumn.integer('songs')
    conlumn.integer('duration')
})


exports.down = knex => knex.schema.dropColumn('playlists') 
