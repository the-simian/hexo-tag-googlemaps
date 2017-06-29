//var dots = require("dot").process({path: "views"});
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var APIKey = hexo.config.google_maps_api_key || false;
var filePath = path.join(__dirname, 'google-maps-template.html');
var tags = hexo.extend.tag;

function googleMaps(args, content) {

  var template = fs.readFileSync(filePath).toString().trim();
  var markers = [];

  function toMarker(d) {
    var list = d.split(',');
    return {
      name: list[0] || '',
      latitude: parseFloat(list[1]),
      longitude: parseFloat(list[2]),
      icon: (list[3] || '').trim()
    };
  }

  if (content.length) {
    markers = _.map(content.split('\n'), toMarker);
  }

  var model = {
    id: 'googleMap' + ((Math.random() * 9999) | 0),
    width: args[3] || '100%',
    height: args[4] || '250px',
    zoom: args[2] || 8,
    scrollwheel: false,
    center: {
      latitude: args[0] || markers[0].latitude,
      longitude: args[1] || markers[0].longitude,
    },
    markers: markers,
    apikey: APIKey
  };


  var templateFunction = _.template(template);
  var compiledMap = templateFunction(model);

  //  console.log(compiledMap);
  // console.log('\n\n\n', args, content);

  return compiledMap;

}


tags.register('googlemaps', googleMaps, {
  async: true,
  ends: true
});