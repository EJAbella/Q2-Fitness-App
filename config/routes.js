const user = require("../controllers/user.js")

module.exports = function(app){

  app.get('/', user.index);
  app.post('/register', user.createProfile);
  app.post('/login', user.login);

  app.get('/test', user.test);

  // session middleware
  app.use(authenticateUser);

  app.get('/userHome', user.userHome);

  app.get('/workout/:id', user.workout)
  app.get('/add/:day_id/:id', user.add)
  app.get('/remove/:day_id/:id', user.remove)

  app.get('/complete/:id', user.complete)


  app.get('/userHome/profile', user.renderUserProfile);
  app.post('/userHome/profile', user.updateUserProfile);

  app.get('/userHome/macros', user.renderMacros);

  app.get('/userHome/logout', user.logout);
}

// session logic
function authenticateUser(req, res, next) {
 if(!req.session.user_id) {
   res.redirect('/')
 } else {
   next();
 }
}
