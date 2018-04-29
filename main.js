var AuroraApi = require('../nanoleaf-aurora-api/index.js');

  //Later this should be implemented and read directly through env variables.
var api = new AuroraApi({
    host: '192.168.1.125',
    base: '/api/v1/',
    port: '16021',
    accessToken: 'z6jQ0SLy14vKhR9Xj5HcVwakRB4AgJtd'
  });

  // Read from Aurora what the current color mode is
  api.getColourMode()
  .then(function(colourMode) {
    console.log('Colour mode: ' + colourMode);
  })
  .catch(function(err) {
    console.error(err);
  });


  // Set panel color with RGB values.
  api.setRGB(228,150,38)
    .then(function() {
      console.log('Success for RGB!');
    })
    .catch(function(err) {
      console.error(err);
    });
