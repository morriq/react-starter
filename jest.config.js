module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'teamcity',
    'lcov'
  ],
  moduleDirectories: ['node_modules', './'],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testResultsProcessor: 'jest-teamcity-reporter',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  setupFiles: [
    '<rootDir>/setupTests.js'
  ]
};
