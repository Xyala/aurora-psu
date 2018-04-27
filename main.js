

var AuroraApi = require('nanoleaf-aurora-client');

var api = new AuroraApi({
    host: '192.168.1.125',
    base: '/api/v1/',
    port: '16021',
    accessToken: 'z6jQ0SLy14vKhR9Xj5HcVwakRB4AgJtd'
  });

  api.getColourMode()
  .then(function(colourMode) {
    console.log('Colour mode: ' + colourMode);
  })
  .catch(function(err) {
    console.error(err);
  });

// from 0 to 359
  api.setHue(20)
    .then(function() {
      console.log('Success for Hue!');
    })
    .catch(function(err) {
      console.error(err);
    });

// from 0 to 100
    api.setSat(100)
      .then(function() {
        console.log('Success for Sat!');
      })
      .catch(function(err) {
        console.error(err);
      });
