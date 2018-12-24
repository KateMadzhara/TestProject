exports.config = {  
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,  
    specs: ["features/**/*.feature"],  
    baseURL: "http://localhost:8080/",  
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    cucumberOpts: {
        require: "../features/step_definitions/*Steps.js",
        profile: false,
        "no-source": true
      }  
};