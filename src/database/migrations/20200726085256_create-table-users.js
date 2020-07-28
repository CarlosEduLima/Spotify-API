const { table } = require("..");

exports.up = knex => knex.schema.createTable('users', table =>{
    table.increments('id')
    table.string('username').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('name')
    table.string('country').notNullable()
    table.integer('age')
    table.timestamps(true, true)
  })


exports.down = knex => knex.schema.dropTable('users') 
