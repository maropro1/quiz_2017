var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

router.get('/help', function(req, res, next) {
    res.render('help');
});

router.get('quizzes/random_play', function(req, res, next) {
    res.render('quizzes/random_play');
});


module.exports = router;
