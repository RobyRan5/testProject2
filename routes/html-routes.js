var path = require("path");
var authenicate = require("../config/middleware/authenticate");

module.exports = function(app) {
    app.get("/", function(req, res) {
        if(req.user) {
            res.redirect("/search");
        }
        res.sendFile(path.join(_dirname, "../public/search.hmtl"));
    });
}
app.get("/search", authenticate, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

var path = require("path");
var search = require("../public/js/search");

module.exports = functio(app) {
    app.get("/", function(req, res) {
        if(req.user) {
        }
 });
app.get("/resutls", search, function(req, res) {
    res.sendFile(path.join(_dirname, "../public/resutls.html")) 
});
};


