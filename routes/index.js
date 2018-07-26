var express = require('express');
var router = express.Router();

const controller = require('../controller');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/web', controller.web);


module.exports = router;
