var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(process.cwd(), 'dist'), function(err) {
  if (err) {
    console.error(err);
  }
  else {
    console.log('Pushed to Github Pages')
  }
});
