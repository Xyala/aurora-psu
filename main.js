//TO BE UPDATED. Currently pointing to my fork with syntax fix on nanoleaf-aurora-api v1.2.0
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
  })

  // Set panel color with RGB values.
  api.setRGB(228,150,38)
    .then(function() {
      console.log('Success for RGB!');
    })
    .catch(function(err) {
      console.error(err);
    });

  var randomValue = randomNumber(30, 50);

    //get some random stuff generated.
    var randomNumber = function(min, max) {
      min = typeof min !== 'undefined' ? min : 0;
      max = typeof max !== 'undefined' ? max : 100;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
