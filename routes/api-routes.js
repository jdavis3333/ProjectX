
// Requiring models
var db = require("../models")


//Routes
//Get route for retrieving a story and choices
app.get("/api/stories_id/:id", function(req, res) {
    db.Stories.findStory({
        where: {
            id: req.params.id
        },
        include: [db.Choices] //need to update/verify in models
    }).then(function(dbStory){
        res.json(dbStory);
    });
});


//Post route for saving player's name
app.post("api/stories", function(req, res) {
    db.Stories.create(req.body).then(function(dbStory) {
        res.json(dbStory);
    });
});


//Post route for signing up a user
app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });


// Route for logging user out, then sends user back to the sign up screen
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

//Route for user login
app.post("/api/login", ... , function(req, res) {
    res.json(req.user);
});