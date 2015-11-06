var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
  writing: function() {
    console.log('Writing Protype...');
    this.directory('boilerplate', '.');
    this.npmInstall();
  },
});
