
// // Index route loads index.html 
// // Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// // Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
    console.log('hi')
  })


  app.get("/users", isAuthenticated, (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/html/start_page.html"))
  })

  app.get("/story", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/html/story_id_1.html"))
  })

};
 