var friends = require("../data/friends")

module.exports = function (app) {
    // Get info from friends object
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    // Ajax post to the api 
    app.post("/api/friends", function (req, res) {

        // grab our newFriend data
        var newFriend = req.body;

        // turning the string of scores into numbers
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        var bestFriendNum = 0;
        var currDiff = 50;


        // Loop through the friends array
        for (i = 0; i < friends.length; i++) {
            var totalDiff = 0;
            // Loop through each score for each friend
            for (j = 0; j < newFriend.scores.length; j++) {
                // Get the absolute value of each difference so it is always a positive number
                var diff = Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                totalDiff += diff;
            }
            // Check to see if this friend is a better friend and if it is replace the old friend
            if (totalDiff < currDiff) {
                bestFriendNum = i;
                currDiff = totalDiff;
            }
        }
        // Use the information of our best friend
        res.json(friends[bestFriendNum]);
        // Our new friend is added to our friends array (this is nonpersistent data)
        friends.push(newFriend);
    })
}