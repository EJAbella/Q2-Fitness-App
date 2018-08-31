
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Albert', email: 'albert@test.com', password: 'asdf', age: 29, gender: 'Male', weight: 145, height: 65, goalWt: 240, points: 140},
        {name: 'Todd', email: 'albert@test.com', password: 'asdf', age: 29, gender: 'Male', weight: 145, height: 65, goalWt: 240, points: 80},
        {name: 'Jake', email: 'albert@test.com', password: 'asdf', age: 29, gender: 'Male', weight: 145, height: 65, goalWt: 240, points: 120},
        {name: 'Nhan', email: 'albert@test.com', password: 'asdf', age: 29, gender: 'Male', weight: 145, height: 65, goalWt: 240, points: 70}
      ]);
    });
};
