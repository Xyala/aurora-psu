//TO BE UPDATED. Currently pointing to my fork with syntax fix on nanoleaf-aurora-api v1.2.0
var AuroraApi = require('../nanoleaf-aurora-api/index.js');
//Import color steps in RGB. Step gradient made with http://www.perbang.dk/rgbgradient/
var ColorSteps = require('./color_1500.js');

  //Later this should be implemented and read directly through env variables.
var api = new AuroraApi({
    host: '192.168.1.125',
    base: '/api/v1/',
    port: '16021',
    accessToken: 'z6jQ0SLy14vKhR9Xj5HcVwakRB4AgJtd'
  });

//get some random stuff generated.
var randomNumber = function(min, max) {
  min = typeof min !== 'undefined' ? min : 0;
  max = typeof max !== 'undefined' ? max : 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Loop to test the changing of the color depending on some random value - simulation of PSU load.
function loop() {

  //Randomly generate a PSU wattage read-out betwee 0 and 1500 - for the test
  var psuWatts = randomNumber(0, 1500);
  console.log('PSU Wattage : '+psuWatts+' Watts');

  //Ther should be a better way to do this. Best would be to read these from the JSON file
  //Will check later
  var counts = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];

  //Figures out the closest "step" for the Wattage value just read from the PSU.
  var closest = counts.reduce(function(prev, curr) {
  return (Math.abs(curr - psuWatts) < Math.abs(prev - psuWatts) ? curr : prev);
  });
  console.log('Closest step : '+closest);

  // JSON Object for the current color step. The array ID corresponds to the closest value/100.
  // This would be adjusted if there would be more granularity.
  var ColorSpecs = ColorSteps[parseInt(closest/100)];

  // Set panel color with RGB values.
  api.setRGB(ColorSpecs['R'],ColorSpecs['G'],ColorSpecs['B'])
    .then(function() {
      console.log('Success setting Nanoleaf RGB to:('+ColorSpecs['R']+','+ColorSpecs['G']+','+ColorSpecs['B']+')');
    })
    .catch(function(err) {
      console.error(err);
    });
  }

setInterval(loop, 1000);
