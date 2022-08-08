/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  // todo: module resolution of 'index.html' not working correctly
};

module.exports = config;
