function fn() {
	var env = karate.env; // get java system property 'karate.env'
	var Config = Java.type('helpers.DataHelper');
	var ConfigLogin = Java.type('step_definitions.LoginAssaiDCMSCloudSteps');
	karate.log('karate.env system property was:', env);
	
	var config = { 
		env : env,
		userName : java.lang.System.getenv('API_USER'),
		password : java.lang.System.getenv('API_PASSWORD'),
		baseUrl : java.lang.System.getenv('API_BASE_URL'),
		pathURL : '/api/views/',
		postURL	: '/api/'
	};
	if (env == 'dev') {
		// over-ride only those that need to be
		config.baseUrl = 'https://localhost/dev/';
		config.userName = '',
		config.password = ''
		
	} else if (env == 'test') {
		config.baseUrl = 'http://localhost:8080/test/';
		config.userName =
		config.password = ''

	} else{
		
	}
	// don't waste time waiting for a connection or if servers don't respond within 5 seconds
	karate.configure('connectTimeout', 50000);
	karate.configure('readTimeout', 50000);
	return config;
}