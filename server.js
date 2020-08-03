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
// We need to use sessions to keep track of our user's login
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})

// Requiring our routes
require("./routes/html-routes.js")(app);

require("./routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
const story = [ 
  //checked
{ story_id: 1, story_value: `Welcome to the Maze<br> Your main objective is to survive and escape.<br> Be aware that each of your choices will affect your chances<br> Are you ready to proceed?`, choice_value: ["Yes", "No, get supplies"] },
//checked
{ story_id: 2, story_value: 'You are heading to the survival shop to get some gear. The owner only has rope and a shovel. Which one do you pick?', choice_value: ["rope","shovel"]},
//checked
{ story_id: 3, story_value: `You ran into the maze enthusiastically and hit a fork in the road<br> To your right is a foggy corridor, and to the left you hear a loud noise<br> Which way do you choose? Noise or fog?`, choice_value: ["Left","Right"] },
//checked
{ story_id: 4, story_value: 'You entered the maze, finally but found that the rope is too short to rapel down! Do you want to jump? Or do you want to go back to the shop for more tools?', choice_value: ["Jump","Go back to the shop"] },
//checked
{ story_id: 5, story_value: "After leaving the shop, an old man saw your shovel and approach to asks for your help. He wants you to help dig up his buried treasure. Will you help?", choice_value: ["Leave him and head to the maze", "Help him"]},
//checked
{ story_id: 6, story_value: 'The fog is getting thicker. Are you sure you want to continue? Of course you do! As you continue, the fog dissipates and you almost fell into a hole! What do you want to do?', choice_value: ["Ehh. Let's go back and find another way","Of course, jump!"]},
//checked
{ story_id: 7, story_value: 'You turned the corner and fell into a swamp! What do you want to do?', choice_value: ["Climb out","Swim to the other side"] },
//checked
{ story_id: 8, story_value: 'You finally enter the maze and see a ladder straight ahead of you and a bright light to your left. Follow the bright light or climb the ladder?', choice_value: ["Say goodbye"] },
//checked
{ story_id: 9, story_value: 'The old man leads you into a canyon and suddenly grabs your shovel and hits you with it. Your vision starts to fade, and you start seeing your deceased grandpa.', choice_value: ["Say goodbye"] },
//checked
{ story_id: 10, story_value: 'You keep on sinking further and further...', choice_value: ["Say goodbye"] },
//checked
{ story_id: 11, story_value: 'You were eaten by an alligator or a crocodile, your choice, either way you were eaten.', choice_value: ["Say goodbye"] },
{ story_id: 12, story_value: "Life is full of choices and you made the wrong ones", choice_value: []}
];
//query: 
//to display the story value-we need to SELECT story_value and choices where story_id = ?? 
  //story_value will be display on the page while choices will be use to query the choice db
    //Select choice_value FROM choice WHERE choice_value = choices[]
const choice = [
  { choice_value:1, choice_value:"Yes" , story_id:3 },
  { choice_value:2 , choice_value:"left" , story_id:6 },
  { choice_value:3 , choice_value:"right" , story_id:7 },
  { choice_value:4 , choice_value:"Ehh. Let's go back and find another way" , story_id:null },
  { choice_value:5 , choice_value:"Of course, jump! " , story_id:null },
  { choice_value:6 , choice_value:"climb out" , story_id:10 },
  { choice_value:7 , choice_value:"Swim to the other side" , story_id:11 },
  { choice_value:8 , choice_value:"No, get supplies" , story_id:2 },
  { choice_value:9 , choice_value:"Rope" , story_id:4 },
  { choice_value:10 , choice_value:"Shovel" , story_id:5 },
  { choice_value:11 , choice_value:"Jump" , story_id:null },
  { choice_value:12 , choice_value:"Go back to the shop" , story_id:2 },
  { choice_value:13 , choice_value:"Leave him and head to the maze" , story_id:8 },
  { choice_value:14 , choice_value:"Help him" , story_id:9 },
  { choice_value: 15, choice_value: "Say goodbye" , story_id: 12}

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
