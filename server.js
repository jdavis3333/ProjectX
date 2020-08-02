// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
var path = require('path');
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);

require("./routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
const story = [ 
{ story_id: 1, story_value: 'Welcome to the Maze. Your main objective is to survive and escape. Be aware that each of your choices will affect your chances. Are you ready to proceed?', choice_id: [1,8] },
{ story_id: 2, story_value: 'You are heading to the survival shop to get some gear. The owner only has rope and a shovel. Which one do you pick?', choice_id: [9,10]},
{ story_id: 3, story_value: 'You ran into the maze enthusiastically and hit a fork in the road. To your right is a foggy corridor, and to the left you hear a loud noise. Which way do you choose? Noise or fog?', choice_id: [2,3] },
{ story_id: 4, story_value: 'The rope is too short! Do you want to jump? Or do you want to go back to the shop for more tools?', choice_id: [4,5] },
{ story_id: 5, story_value: "After leaving the shop, an old man saw your shovel and approach to asks for your help. He wants you to help dig up his buried treasure. Will you help?", choice_id: [8,9]},
{ story_id: 6, story_value: 'The fog is getting thicker. Are you sure you want to continue? Of course you do! As you continue, the fog dissipates and you almost fell into a hole! What do you want to do?', choice_id: [1,2]},
{ story_id: 7, story_value: 'You turned the corner and fell into a swamp! What do you want to do?', choice_id: [] },
{ story_id: 8, story_value: 'You finally enter the maze and see a ladder straight ahead of you and a brigh light to your left. Follow the bright light or climb the ladder?', choice_id: [] },
{ story_id: 9, story_value: 'The old man leads you into a canyon and suddenly grabs your shovel and hits you with it. Your vision starts to fade, and you start seeing your deceased grandpa.', choice_id: [] },
{ story_id: 10, story_value: 'You keep on sinking further and further...', choice_id: [] },
{ story_id: 11, story_value: 'You were eaten by an alligator or a crocodile, your choice, either way you were eaten.', choice_id: [] }
];
//query: 
//to display the story value-we need to SELECT story_value and choices where story_id = ?? 
  //story_value will be display on the page while choices will be use to query the choice db
    //Select choice_value FROM choice WHERE choice_id = choices[]
const choice = [
  { choice_id:1, choice_value:"yes" , story_id:3 },
  { choice_id:2 , choice_value:"left" , story_id:6 },
  { choice_id:3 , choice_value:"right" , story_id:7 },
  { choice_id:4 , choice_value:"Ehh. Let's find another way" , story_id:null },
  { choice_id:5 , choice_value:"Jump!" , story_id:null },
  { choice_id:6 , choice_value:"climb out" , story_id:10 },
  { choice_id:7 , choice_value:"Swim to the other side" , story_id:11 },
  { choice_id:8 , choice_value:"no" , story_id:2 },
  { choice_id:9 , choice_value:"Rope" , story_id:4 },
  { choice_id:10 , choice_value:"Shovel" , story_id:5 },
  { choice_id:11 , choice_value:"Jump" , story_id:null },
  { choice_id:12 , choice_value:"Go back to the shop" , story_id:null },
  { choice_id:13 , choice_value:"Leave him and head to the maze" , story_id:8 },
  { choice_id:14 , choice_value:"help him" , story_id:9 }

]

db.sequelize.sync({ force: true }).then(function () {
  db.Stories.bulkCreate(story);
  db.Choices.bulkCreate(choice);
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
});
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
//   });
