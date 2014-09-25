//var dots = require("dot").process({path: "views"});
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var filePath = path.join(__dirname, 'google-maps-template.html');
var tags = hexo.extend.tag;

function googleMaps(args, content) {

  var template = fs.readFileSync(filePath).toString().trim();

  var model = {
    id: 'googleMap' + ((Math.random() * 9999) | 0),
    width: '100%',
    height: '250px',
    center: {
      latitude: args[0],
      longitude: args[1]
    }
  };

  var compiledMap = _.template(template, model);


  console.log(compiledMap);
  console.log('\n\n\n', args, content);
  return compiledMap;

}

tags.register('google-maps', googleMaps, true);