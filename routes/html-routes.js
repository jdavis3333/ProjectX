// Dependencies
var path = require("path");

// Routes

// Index route loads index.html 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route to login screen

app.get("/login", function(req, res) {
    if (req.user){
        res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
})

// Route to sign up screen

app.get("/signup", function(req, res) {
    if(req.res) {
        res.redirect("/")
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
})

// Route to Story 2
app.get("/story_id_2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_2.html"))
});

// Route to Story 3
app.get("/story_id_3", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_3.html"))
});

// Route to Story 4
app.get("/story_id_4", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_4.html"))
});

// Route to Story 5
app.get("/story_id_5", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_5.html"))
});

// Route to Story 6
app.get("/story_id_6", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_6.html"))
});

// Route to Story 7
app.get("/story_id_7", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_7.html"))
});

// Route to Story 8
app.get("/story_id_8", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_8.html"))
});

// Route to Story 9
app.get("/story_id_9", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_9.html"))
});

// Route to Story 10
app.get("/story_id_10", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_10.html"))
});

// Route to Story 11
app.get("/story_id_11", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/story_id_11.html"))
});