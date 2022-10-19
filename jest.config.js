module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    'd3-array': '<rootDir>/node_modules/d3-array/dist/d3-array.min.js',
    'd3-polygon': '<rootDir>/node_modules/d3-polygon/dist/d3-polygon.min.js',
  },
};
