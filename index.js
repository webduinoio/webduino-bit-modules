const matrix = require('webduino-bit-module-led-matrix');
const button = require('webduino-bit-module-button');
const dht = require('webduino-bit-module-dht');
const thermistor = require('webduino-bit-module-thermistor');
const mpu9250 = require('@webduinoio/bit-mpu9250');

module.exports = function (webduino) {
  matrix(webduino);
  button(webduino);
  dht(webduino);
  thermistor(webduino);
  mpu9250(webduino);
};
