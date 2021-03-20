const { net, session } = require('electron');

module.exports = {

	get : (url, headers, proxy, session_id) => {

		return new Promise(async (resolve,reject) => {

			try{

				var ses = session.fromPartition(`${session_id}`);

				var request = net.request({

					method : 'GET', 
					url : url, 
					session : ses,
					useSessionCookies : true, 
					headers : headers,
				
				});

				if(proxy){

					proxy = proxy.split(':');
					ses.setProxy({ proxyRules : `${proxy[0]}:${proxy[1]}` });
				};

				if(proxy.length == 4){

					request.on('login', (authInfo, callback) => {

						callback(proxy[2], proxy[3]);
					});
				};


				request.on('response', (response) => {

					status_code = response.statusCode; 
					response_headers = response.headers;

					response.on('error', (error) => {
						reject({
							error : true,
							reason : error
						});
					});

					response.on('data',(chunk) => {
							
						response_data = chunk.toString();
					});

					response.on('end', () => {

						resolve({
							session_id : session_id,
							data : response_data,
							headers : response_headers, 
							status_code : status_code, 
						});
					});
				});

				request.end();

			}catch{

				reject({
					error : true, 
					reason : 'unknown'
				});
			};
		});
	},

	post : (url, headers, body,  proxy, session_id) => {

		return new Promise(async (resolve,reject) => {

			try{

				var ses = session.fromPartition(`${session_id}`);

				var request = net.request({

					method : 'POST', 
					url : url, 
					session : ses,
					useSessionCookies : true, 
					headers : headers,
				
				});

				if(proxy){

					proxy = proxy.split(':');
					ses.setProxy({ proxyRules : `${proxy[0]}:${proxy[1]}` });
				};

				if(proxy.length == 4){

					request.on('login', (authInfo, callback) => {

						callback(proxy[2], proxy[3]);
					});
				};

				if(body){

					request.write(body);
				};

				request.on('response', (response) => {

					status_code = response.statusCode; 
					response_headers = response.headers;

					response.on('error', (error) => {
						reject({
							error : true,
							reason : error
						});
					});

					response.on('data',(chunk) => {
							
						response_data = chunk.toString();
					});

					response.on('end', () => {

						resolve({
							session_id : session_id,
							data : response_data,
							headers : response_headers, 
							status_code : status_code, 
						});
					});
				});

				request.end();
				
			}catch{

				reject({
					error : true, 
					reason : 'unknown'
				});
			};
		});
	},

	custom : (method, url, headers, body,  proxy, session_id) => {

		return new Promise(async (resolve,reject) => {

			try{

				var ses = session.fromPartition(`${session_id}`);

				var request = net.request({

					method : method, 
					url : url, 
					session : ses,
					useSessionCookies : true, 
					headers : headers,
				
				});

				if(proxy){

					proxy = proxy.split(':');
					ses.setProxy({ proxyRules : `${proxy[0]}:${proxy[1]}` });
				};

				if(proxy.length == 4){

					request.on('login', (authInfo, callback) => {

						callback(proxy[2], proxy[3]);
					});
				};

				if(body){

					request.write(body);
				};

				request.on('response', (response) => {

					status_code = response.statusCode; 
					response_headers = response.headers;

					response.on('error', (error) => {
						reject({
							error : true,
							reason : error
						});
					});

					response.on('data',(chunk) => {
							
						response_data = chunk.toString();
					});

					response.on('end', () => {

						resolve({
							session_id : session_id,
							data : response_data,
							headers : response_headers, 
							status_code : status_code, 
						});
					});
				});

				request.end();
				
			}catch{

				reject({
					error : true, 
					reason : 'unknown'
				});
			};
		});
	},
};