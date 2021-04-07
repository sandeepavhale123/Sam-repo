var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')(/* options */);

router.get('/', function (req, res) {
  res.json({ title: 'welcome home' });
});

router.get('/posts', function (req, res) {
  db.query('SELECT * FROM posts')
    .then(function (data) {
      res.json({ posts: data });
    })
    .catch(function (error) {
      console.log('Error', error);
      res.json({ error: error });
    });
});

module.exports = router;
