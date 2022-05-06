function fn() {
	var env = karate.env; // get java system property 'karate.env'
	//svar Config = Java.type('helpers.DataHelper');
	var ConfigLogin = Java.type('step_definitions.LoginAssaiDCMSCloudSteps');
	karate.log('karate.env system property was:', env);
	
	var config = { 
		env : env,
		userName : ConfigLogin.buildUserNameAA(env),
		password : Config.readPwdFromKeePassForRest(env),
		baseUrl : ConfigLogin.getApiURL(env),
		userNameCustomService: 'adibkhaled@api.com',
		pathURL : '/api/views/',
		postURL	: '/api/'
	};
	if (env == "hotest") {
		// over-ride only those that need to be
		config.baseUrl = 'https://ho.assaicloud.com/AAhotest';
		config.userName = 
		config.password = 
		
	} else if (env == 'eu602') {
		config.baseUrl = 'https://eu.assaicloud.com/AAeu602/';
		config.userName =
		config.password = 
		
	} else{
		
	}
	// don't waste time waiting for a connection or if servers don't respond within 5 seconds
	karate.configure('connectTimeout', 50000);
	karate.configure('readTimeout', 50000);
	return config;
}