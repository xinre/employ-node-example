var express = require('express');
var router = express.Router();
let databases = require('../controller/databases.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data',databases.get_click);
router.get('/mysqldata',databases.getmysqldata);

module.exports = router;
