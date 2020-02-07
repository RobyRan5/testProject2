$(document).ready(function() {

var loginForm = $("field.login");
var emailInput = $("input#email");
var passwordInput = $("input#password");

loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
        return;
    }

    loginUser(userData.email, userData.password);
    emailInput.val("");
    password.val("");
});
    function loginUser(email, password) {
        $.post("api/login", {
            email: email,
            password: password
        })
        .then(function() {
            window.location.replace("/search");
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});
