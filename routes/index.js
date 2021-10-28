var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'UNIDAD 3',
    nombre: 'Jorge'
   });
});

module.exports = router;
