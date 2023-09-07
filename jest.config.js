/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { '^.+\\.(t|j)sx?$': 'ts-jest' },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage'
};
