'use strict';

const request = require('request');
const nanoleafHost = '192.168.1.125:16021';

let requestTokenOptions = {
    method: 'POST',
    url: 'http://' + nanoleafHost + '/api/v1/new',
};

console.log('Holding the on-off button down for 5-7 seconds until the LED starts flashing in a pattern ');

request(requestTokenOptions, function(error, response, body) {
    if (error) {
      console.log('Error: ' + error);
      return;
    }

    console.log(response.body);
});
