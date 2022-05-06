function fn() {
	var env = karate.env; // get java system property 'karate.env'
	//var Config = Java.type('helpers.DataHelper');
	var ConfigLogin = Java.type('step_definitions.LoginAssaiDCMSCloudSteps');
	karate.log('karate.env system property was:', env);
	
	var config = { 
		env : env,
		userName : ConfigLogin.buildUserNameAA(env), // used username from keypass
		password : Config.readPwdFromKeePassForRest(env), // used pass from keypass
		baseUrl : ConfigLogin.getApiURL(env),
		userNameCustomService: 'adibkhaled@api.com',
		pathURL : '/api/views/',
		postURL	: '/api/'
	};
	if (env == "env_2") {
		// over-ride only those that need to be
		config.baseUrl = 'https://env_2.assaicloud.com/AAenv_2';
		config.userName = 
		config.password = 
		
	} else if (env == 'env_1') {
		config.baseUrl = 'https://env_1.assaicloud.com/AAenv_1/';
		config.userName =
		config.password = 
		
	} else{
		
	}
	// don't waste time waiting for a connection or if servers don't respond within 5 seconds
	karate.configure('connectTimeout', 50000);
	karate.configure('readTimeout', 50000);
	return config;
}