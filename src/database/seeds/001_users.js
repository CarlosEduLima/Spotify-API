
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: '493k42o3i423k423l4',
          email: 'carlos@gmail.com',
          name: 'Carlos',
          country: 'Brasil',
          age: 19
        }
      ]);
    });
};
