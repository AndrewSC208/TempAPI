const Model = require('../../lib/facade');
const temperatureSchema  = require('./temperature-schema');

class TemperatureModel extends Model {}

module.exports = new TemperatureModel(temperatureSchema);
