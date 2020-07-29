
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

