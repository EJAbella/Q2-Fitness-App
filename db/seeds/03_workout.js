
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workout').del()
    .then(function () {
      // Inserts seed entries
      return knex('workout').insert([
        {weekday: 1, workout_id: 1, user_id: 1},
        {weekday: 2, workout_id: 7, user_id: 1},
        {weekday: 3, workout_id: 9, user_id: 1}
      ]);
    });
};
