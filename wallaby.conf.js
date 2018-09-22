module.exports = wallaby => ({
  files: ['src/**/*.js', 'src/**/*.json', 'package.json', '!src/**/*.test.js'],
  tests: ['src/**/*.test.js'],
  env: {
    type: 'node',
    runner: 'node'
  },
  compilers: {
    'src/**/*.js': wallaby.compilers.babel()
  },
  testFramework: 'jest',
  setup: function(walaby) {
    const jestConfig = require('./package.json').jest
    walaby.testFramework.configure(jestConfig)
  }
})
