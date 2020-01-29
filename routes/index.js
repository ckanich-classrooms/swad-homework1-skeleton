// routes/index.js
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO: send the HTML of the home page if the user is not logged in,
  // and send the contents of the logged in page if the user is logged in.

  // This is the mock response - remove this when you start adding your own response.
  res.redirect("loggedout.html");
});

router.post('/login', function(req, res, next) {
  // TODO: check the username against the "database" and log the user in.
  
  // This is the mock response - remove this when you start adding your own response.
  res.redirect("loggedin.html");
});

router.post('/register', function(req, res, next) {
  // TODO: check that the username doesn't exist and add this user to the "database."
  
  // This is the mock response - remove this when you start adding your own response.
  res.redirect("loggedin.html");
});

router.post('/update', function(req, res, next) {
  // TODO: change this user's favorite number to the new value.
  
  // This is the mock response - remove this when you start adding your own response.
  res.redirect("loggedin.html");
});

router.post('/increment', function(req, res, next) {
  // TODO: add this specific user's favorite number to the server's favorite number.
  
  // This is the mock response - remove this when you start adding your own response.
  res.redirect("loggedin.html");
});

router.post('/logout', function(req, res, next) {
  // TODO: modify this user's cookie so that they are no longer authenticated,
  // and boot them back to the home page.
  
  // This is the mock response - remove this when you start adding your own response.
  res.redirect("loggedout.html");
});

module.exports = router;