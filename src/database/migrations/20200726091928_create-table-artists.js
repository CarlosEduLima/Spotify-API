

exports.up = knex => knex.schema.createTable('artists', table =>{
    table.increments('id')
    table.string('name').notNullable()
    table.string('style').notNullable()
    table.text('bio').notNullable()
    table.timestamps(true, true)
  })


exports.down = knex => knex.schema.dropTable('artists') 
