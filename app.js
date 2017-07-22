// Problem: We need a simple look to Github profile
// Solution : Using NodeJS to connect Github API
// to get profile info

let profile  = require('./profile.js')

let profiles = process.argv.slice(2) // array slice
profiles.map(profile.get)