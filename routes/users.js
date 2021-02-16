var express = require('express');
var router = express.Router();
const db = require("../model/helper");
/* GET users listing. */
router.get('/', function(req, res, next) {
  db(`SELECT * FROM users`) 
    .then(results => {
      res.send(results.data);
    })
  
});

router.get('/:id', function(req, res, next) {
  const Id = req.params.id;
  // const {id} = req.params;
  db(`SELECT * FROM users WHERE userId=${Id};`)
    .then(results => {
      res.send(results.data);
    })
  
});

// router.post('/', function())




module.exports = router;
