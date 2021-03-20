const { v4: uuidv4 } = require('uuid');
const { app } = require('electron'); 
const request = require('./request.js');

app.whenReady().then(async () => {

	var session_id = await uuidv4(); 
	var proxy = false;

	var get = await request.get('https://github.com/imbackenddev', {

		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	    "accept-language": "en",
	    "cache-control": "no-cache",
	    "pragma": "no-cache",
	    "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
	    "sec-ch-ua-mobile": "?0",
	    "sec-fetch-dest": "document",
	    "sec-fetch-mode": "navigate",
	    "sec-fetch-site": "same-origin",
	    "sec-fetch-user": "?1",
	    "upgrade-insecure-requests": "1"
	}, proxy, session_id).catch((err) => {
		console.log(err);
	});

	console.log(get);

	var body = false;

	var post = await request.post('https://github.com/imbackenddev', {

		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	    "accept-language": "en",
	    "cache-control": "no-cache",
	    "pragma": "no-cache",
	    "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
	    "sec-ch-ua-mobile": "?0",
	    "sec-fetch-dest": "document",
	    "sec-fetch-mode": "navigate",
	    "sec-fetch-site": "same-origin",
	    "sec-fetch-user": "?1",
	    "upgrade-insecure-requests": "1"
	},body, proxy, session_id).catch((err) => {
		console.log(err);
	});

	console.log(post);	

	var method = 'PUT';

	var custom = await request.custom(method, 'https://github.com/imbackenddev', {

		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
	    "accept-language": "en",
	    "cache-control": "no-cache",
	    "pragma": "no-cache",
	    "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
	    "sec-ch-ua-mobile": "?0",
	    "sec-fetch-dest": "document",
	    "sec-fetch-mode": "navigate",
	    "sec-fetch-site": "same-origin",
	    "sec-fetch-user": "?1",
	    "upgrade-insecure-requests": "1"

	},body, proxy, session_id).catch((err) => {
		console.log(err);
	});

	console.log(custom);
});
