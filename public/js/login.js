$(document).ready(function() {
    // Getting references to our form and inputs
    //jquery pointer to the html element that contains the input
    var loginForm = $("form.login");
    var usernameInput =$("input#username")
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      //store the gather information into a obj that will be sent to the serveer
      var userData = {
        username: usernameInput.val(),
        // email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
      // console.log(userData);
      if (!userData.username || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      })
        .then(function() {
          window.location.replace("/users");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  