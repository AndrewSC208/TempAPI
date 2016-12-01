const Controller = require('../../lib/controller');
const temperatureFacade  = require('./temperature-facade');

class TemperatureController extends Controller {}

module.exports = new TemperatureController(temperatureFacade);
