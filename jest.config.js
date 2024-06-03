module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.test.{js,jsx,ts,tsx}"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
