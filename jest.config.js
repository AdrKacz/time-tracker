module.exports = {
  displayName: {
    name: "Electron App",
    color: "blue",
  },
  rootDir: "src",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
      "<rootDir>/react-src/*.jsx",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    }
  }
};
