exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bears')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('bears').insert([
        { id: 1, name: 'Yogi' },
        { id: 2, name: 'Smoki' },
        { id: 3, name: 'BrotherBear' }
      ]);
    });
};
