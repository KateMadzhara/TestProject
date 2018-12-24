exports.config = {  
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,  
    framework: "custom",
    specs: ["features/**/*.feature"],  
    baseURL: "http://localhost:8080/",
    frameworkPath: "./node_modules/protractor-cucumber-framework",
    cucumberOpts: {
        require: ["./features/step_definitions/*.Steps.js"],
        profile: false,
        "no-source": true
      }  
};