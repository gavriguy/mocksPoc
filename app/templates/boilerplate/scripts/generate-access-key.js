var jsonfile = require('jsonfile');
var md5 = require('blueimp-md5').md5;
var file = 'accessKey.json'
var obj = {accessKey: md5(process.argv[2])}

jsonfile.writeFile(file, obj, function (err) {
  if (err) console.error(err);
  console.log('You set "' + process.argv[2] + '" as you new access key');
})
