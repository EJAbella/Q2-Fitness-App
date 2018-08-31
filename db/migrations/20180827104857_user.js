
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.string('name')
    table.string('email')
    table.string('password')
    table.integer('age')
    table.string('gender')
    table.integer('weight')
    table.integer('height')
    table.integer('goalWt')
    table.integer('points').defaultTo(0)
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
