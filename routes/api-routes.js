const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
});

const fs = require("fs");
const axios = require("axios");
const inqurier = require("Inqurier");

inquirer
const userSearch = {

    }
}
 
    axios.get(queryURL).then(function(res) {
    const dataSearch = res.data.map(function(repo) {
        return data.search;
    });

    (userSearch).done(function (response) {
    console.log(response)


    module.exports = function(app) {
        app.post("/api/search", data.search("local"), function(req, res) {
            res.json(req.user);
        });

        }

var unirest = require('unirest');

unirest.get('https://jsonwhois.com/api/v1/whois')
 .headers({
    'Accept': 'application/json',
    'Authorization': 'Token token=<Api Key>'
 })

   .query({
      "domain": "<godaddy.com>"
       })

   .end(function (response) {
        console.log(response.body);
})
