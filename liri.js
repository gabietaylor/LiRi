// Vars To Hold Index
var proc2 = process.argv[2];
var proc3 = process.argv[3];

// NPM vars & keys
var keys = require('./keys.js');
//console.log(keys);
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

// now lets switch
// switch get rid of if () statements in code and chgs everything to functions
switch (proc2) {
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        if (proc3 === undefined) {
            console.log("Your search was undefined but heres The Sign");
            proc3 = "The Sign Ace of Base";
            spotify();
        } else {
            spotify();
        }
        break;
    case "this-movie":
        if (proc3 === undefined) {
            console.log("Your search was undefined but heres Mr. Nobody");
            proc3 = "Mr. Nobody";
            omdb();
        } else {
            omdb();
        }
        break;
    case "do-what-it-says":
        twitter();
        break;
    default:
        console.log("Please choose type in either: tweets, spotify-this-song, this-movie")
}
//-------------------------------------------Twitter Complete
function twitter() {
    // Twitter User Based Auth.
    var client = new Twitter(
        keys
    );
    //console.log(client);
    // 20 tweets
    var params = {
        screen_name: 'EzioAuditoreAno',
        limit: 20
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        // Throw Error
        if (error) {
            throw error;
        }
        // No Error
        if (!error) {
            /*            console.log(tweets);*/
        }
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
        /*        for (var i = 0; i < tweets.length; i++) {
                    //console.log(tweets[i].created_at);
                }*/
    });
}
// ---------------------------Spotify Complete
function spotify() {
    // Spotify User Based Auth.
    var spotifyrequire = new Spotify({
        id: "b47ff273b32f46e2b414f10a09871472",
        secret: "ed9a99de01e243ad971ea12452eba1ea"
    });
    //console.log(spotifyrequire);
    // Spotify Search
    spotifyrequire.search({
        type: 'track',
        query: proc3,
        limit: 1
    }, function(err, data) {

        // Throw Error
        if (err) {
            return console.log('Error occured: ' + err);
        } else {
            var songInfo = data.tracks.items[0];
            var songResult = console.log(songInfo.artists[0].name);
            console.log(songInfo.name);
            console.log(songInfo.album.name);
            console.log(songInfo.preview_url);
            /*console.log(songResult);*/
        };
    });
}
// ---------------------------Movie Complete
function omdb() {
    var movieName = proc3;
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
    //console.log(queryUrl);
    request(queryUrl, function(error, response, body) {
        if (error) {
            return console.log('Error occured: ' + err);
        }
        // No error push this
        if (!error && response.statusCode === 200) {
            // Parse stuff to body
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMBD Rating: " + JSON.parse(body).imbdsRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
}
// ------------------------------FS
function readFile() {
    // read random.txt
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return comsole.log(err);
        }
        // Split data in random.txt by commas
        var split = data.split(",");
        proc3 = split[1];
        //console.log(data);
        spotify();
    });
};