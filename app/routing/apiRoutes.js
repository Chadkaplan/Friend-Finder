var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    
    app.post("/api/friends", function (req, res) {
        // var difference = function (a, b) { return Math.abs(a - b); }
        // Logic Here
    })

}