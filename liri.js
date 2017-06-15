// Vars for index
var process2 = process.argv[2];
var process3 = process.argv[3];

//-------------------------------------------Twitter---------------------------------------------------------------
// Tweet Vars
var keys = require('./keys.js');
//console.log(keys);

var Twitter = require('twitter');

// Twitter user based auth.
var client = new Twitter(
    keys
);
//console.log(client);

// index is tweets
if (process2 === "tweets") {

    // 20 tweets
    var params = {
        screen_name: 'EzioAuditoreAno'
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //console.log(tweets);

    // If theres an error, it'll throw it
    if (error) {
        throw error;
    }
    // If theres isnt an error, it'll console log the tweets
    if (!error) {
        //console.log(tweets);
    }
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
    }
});
}
// ---------------------------Spotify









// ---------------------------Movie