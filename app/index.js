var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
  writing: function() {
    this.directory('boilerplate', '.');
    this.npmInstall();
  },
});
