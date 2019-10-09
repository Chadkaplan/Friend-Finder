var friends = require("../data/friends")

module.exports = function (app) {
    // Get info from friends object
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    // Post to friends object
    app.post("/api/friends", function (req, res) {
        // Logic Here
        let newFriend = req.body;
        let newFriendScores = req.body.scores;
        friends.push(newFriend);
        let lastDiff = 0;
        let friendNum = 0;
        let totalDiff = 0;
        for (let i = 0; i < friends.length; i++) {
            
            for (let j = 0; j < newFriendScores.length; j++) {
        
            }

        }
    })

}