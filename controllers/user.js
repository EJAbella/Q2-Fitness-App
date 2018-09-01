const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.render("index");
  },

  login: function(req, res) {
    knex('user').where('user.email', req.body.email).then((result) => {
      if(result[0].password === req.body.password) {
        req.session.user_id = result[0].id;
        res.redirect('/userHome')
      } else {
        res.redirect('/')
      }
    })
  },

  createProfile: function(req, res) {
    knex('user').insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(() => {
      res.redirect('/')
    })
  },

  userHome: function (req, res) {
    knex('user').where('id', req.session.user_id).then((result) => {
      return knex('user').orderBy('points', 'desc').then((allUsers) => {
        let region = process.env.aws_region;
        let key = process.env.aws_key;
        res.render('userHome', {user:result[0], allUsers:allUsers, region, key})
      })
    })
  },

  renderUserProfile: function (req, res) {
    knex('user').where('user.id', req.session.user_id).then((result) => {
      res.render('userProfile', {userProfile: result[0]})
    })
  },

  updateUserProfile: function (req, res) {
    knex('user').where("user.id", req.session.user_id).update({
      age: req.body.age,
      gender: req.body.gender,
      weight: req.body.weight,
      height: req.body.height,
      goalWt: req.body.goalWt
    }).then(() => {
      res.redirect('/userHome/profile')
    })
  },

  renderMacros: (req, res) => {
    res.render('macros')
  },

  workout: (req, res) => {
    knex.select('workout.id AS workoutID', '*').from('user').join('workout', 'user.id', 'workout.user_id')
      .join('workoutList', 'workout.workout_id', 'workoutList.id')
      .where('workout.weekday', req.params.id)
      .where('workout.user_id', req.session.user_id).then((userResult) => {
      return knex('workoutList').then((workoutResult) => {
        res.render('workout', {workouts:workoutResult, userWorkout:userResult, weekday: req.params.id})
      })
    })
  },

  add: (req, res) => {
    knex('workout').insert({
      weekday: req.params.day_id,
      workout_id: req.params.id,
      user_id: req.session.user_id
    }).then(() => {
      res.redirect(`/workout/${req.params.day_id}`)
    })
  },

  remove: (req, res) => {
    knex('workout').where('workout.id', req.params.id).del().then(() => {
      res.redirect(`/workout/${req.params.day_id}`)
    })
  },

  complete: (req, res) => {
    knex('user').where('id', req.session.user_id).then((result) => {
      let curPoints = result[0].points;
      return knex('user').where('id', req.session.user_id).update({
        points: curPoints + 10
      }).then(() => {
        res.redirect(`/workout/${req.params.id}`)
      })
    })
  },

  test: (req, res) => {
    res.render('test')
  },

  logout: (req, res) => {
    req.session.user_id = null;
    res.redirect('/')
  },

}
