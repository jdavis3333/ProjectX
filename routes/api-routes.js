
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  app.get("/api/choice/:choice", (req, res) => {
    console.log(req.params)
    //query Select story_id FROM CHOICES WHERE choice_value = req.data
    db.Choices.findOne({
      // attributes: ['story_id'],
      where: { choice_value: req.params.choice },
      // include: [db.Stories]
    }).then((item) => {
      console.log(item);
      res.json(item);
    }).catch(err => {
      console.log(err)
      res.json(err)
    })
  });
  app.get("/api/story/:storyID", (req, res) => {
    console.log(req.params)
    db.Stories.findOne({
      where: { story_id: req.params.storyID }
    }).then((result) => {
      console.log(result)
      res.json(result)
    }).catch(err => {
      console.log(err)
      res.json(err)
    })
  })
  


  app.post("/api/login", passport.authenticate("local"), (req, res)=> {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
        console.log(req.body)
      })

      .catch(function (err) {
        res.status(401).json(err);
        console.log(err)
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
