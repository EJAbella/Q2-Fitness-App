
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workoutList', (table) => {
    table.increments();
    table.integer('bodyPart')
    table.string('workout')
    table.text('desc')
    table.text('imgURL')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workoutList')
};
