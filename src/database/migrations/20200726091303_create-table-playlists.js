

exports.up = knex => knex.schema.createTable('playlists', table =>{
    table.increments('id')
    table.string('name').notNullable()
    table.string('description')
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamps(true, true)
  })


exports.down = knex => knex.schema.dropTable('playlists') 
