exports.up = function(knex, Promise) {
  return knex.schema.createTable('bears', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bears');
};
