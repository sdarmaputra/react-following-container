// Karma configuration
// Generated on Wed Oct 18 2017 10:15:24 GMT+0700 (WIB)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
	  'src/**/*.scss',
	  'node_modules/babel-polyfill/dist/polyfill.min.js',
	  'testSetup.js',
	  'tests/**/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
	  'src/**/*.scss': ['scss'],
	  'testSetup.js': ['browserify'],
      'src/**/*.js': ['browserify'],
	  'tests/**/*.test.js': ['browserify']
   	},

	browserify: {
	  debug: true,
	  transform: [['babelify', { presets: ['es2015', 'react'] }], 'sassify']
	},
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'].concat(process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'prod' ? ['Chrome'] : []),


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity

  })
}
