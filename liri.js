// Vars
var keys = require('./keys.js');
console.log(keys);

// Permissions
var Twitter = require('twitter');

// Twitter User Based Auth.
var client = new Twitter({
    keys
});
console.log(client);