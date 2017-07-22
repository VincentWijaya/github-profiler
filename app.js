// Problem: We need a simple look to Github profile
// Solution : Using NodeJS to connect Github API
// to get profile info

//TODO: [x] Connect to Github API
let https     = require('https')
const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/vincentw16',
	method: 'GET',
	headers:{
		'user-agent': 'nodejs'
	}
} 
//TODO: [x] Read the data
let request = https.request(options, (response) =>{
 let body = ''
	response.on('data', (data) =>{
		body = body + data
	}) 
	response.on('end', () =>{
		//TODO: [x] Parse the data
		// Convert String to JSON (JavaScript Object)
		let profile = JSON.parse(body)

		//TODO: [x] Print the data
		//console.log(profile.login + ' owns ' + profile.public_repos + ' repos')
		
		console.log(`${profile.login} owns ${profile.public_repos} repos and has ${profile.followers} followers.`)
	})
}) 											  
request.end()

request.on('error', (e) =>{
	console.error(e)
})

