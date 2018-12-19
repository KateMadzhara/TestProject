exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/*[sS]pec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  }