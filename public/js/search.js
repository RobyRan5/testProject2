$(document).ready(function() {

var userInput = $("field.search");
var location = $("input#location");
var yelpVerticle = $("select.option");

search.on("Go!", function(event) {
    event.preventDefault();
    var searchData = {
        location: locationInput.val().trim(),
        yelpVerticle: yelpVerticleInput.val().trim()
    };
    function userInput(location, yelpVerticle) {
        $.post("api/login", {
            location: locationInput,
            yelpVerticle: yelpVerticle,
        })
        .then(function() {
            window.location.replace("/results");
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});
});

