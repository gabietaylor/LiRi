// Vars To Hold Index
var process2 = process.argv[2];
var process3 = process.argv[3];

//-------------------------------------------Twitter---------------------------------------------------------------

// Tweet Vars
var keys = require('./keys.js');
//console.log(keys);

var Twitter = require('twitter');

// Twitter User Based Auth.
var client = new Twitter(
    keys
);
//console.log(client);

// Indexes Tweets
if (process2 === "tweets") {

    // 20 tweets
    var params = {
        screen_name: 'EzioAuditoreAno'
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        //console.log(tweets);

        // Throw Error
        if (error) {
            throw error;
        }
        // No Error
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

var Spotify = require('node-spotify-api');

// Spotify User Based Auth.
var spotify = new Spotify ({
	id: "b47ff273b32f46e2b414f10a09871472",
	secret: "ed9a99de01e243ad971ea12452eba1ea"
});
console.log(spotify); 








// ---------------------------Movie