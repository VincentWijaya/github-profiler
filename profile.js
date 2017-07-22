//TODO: [x] Connect to Github API
let https = require('https')

let get   = (username) =>{

	const options  = {
		hostname: 'api.github.com',
		port: 443,
		path: `/users/${username}`,
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
			if (response.statusCode === 200) {

			//TODO: [x] Print the data
			//console.log(profile.login + ' owns ' + profile.public_repos + ' repos')
		
			console.log(`${profile.login} owns ${profile.public_repos} repos and has ${profile.followers} followers.`)
			} else{
		  	  console.log(`Profile with username ${username} not found`)
		}
	})
}) 											  
request.end()

request.on('error', (e) =>{
	console.error(e)
	})
}

module.exports = {
	get
}