const Router = require('express').Router;
const router = new Router();

const temperature  = require('./model/temperature/temperature-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to temp-data API!' });
});

router.use('/temperature', temperature);


module.exports = router;
