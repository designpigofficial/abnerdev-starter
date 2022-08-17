const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://abnerdevelopment.com",
    supportFile: false,
  },
});
