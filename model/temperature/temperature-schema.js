const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const temperatureSchema = new Schema({
  date: { type: Date, default: Date.now, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
});


module.exports = mongoose.model('Temperature', temperatureSchema);
