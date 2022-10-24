const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
       module.exports = defineConfig({
         
         _viewportWidth: 1440,
         get viewportWidth() {
           return this._viewportWidth;
         },
         set viewportWidth(value) {
           this._viewportWidth = value;
         },
         viewportHeight: 980,
         
       })
    },
  },
});
