var express = require('express');
var router = express.Router();
const db = require("../model/helper");
/* GET users listing. */
router.get('/', function(req, res, next) {
  db(`SELECT * FROM users`) 
    .then(results => {
      res.send(results.data);
    })
  .catch((err) => res.status(500).send(err));
});

router.get('/:id', function(req, res, next) {
  const Id = req.params.id;
  // const {id} = req.params;
  try {
  db(`SELECT * FROM users WHERE userId=${Id};`)
    .then(results => {
      res.send(results.data);
    });
  } catch (error) {
    res.status(500).send(err);
  }
});

router.post('/', function(req, res, next) {
  const {firstname, lastname, email, username, currentlocation} = req.body;
  db(`INSERT INTO users (firstname, lastname, email, username, currentlocation) VALUES ("${firstname}", "${lastname}", "${email}", "${username}", "${currentlocation}");`).then(results => {
    res.send("new entry was added");
  })
  .catch((err) => res.status(500).send(err));
});

router.put('/ :id', function(req, res, next) {
  const {firstname, lastname, email, username, currentlocation} = req.body;
  try {
    db(`UPDATE users SET (firstname, lastname, email, username, currentlocation) VALUES ("${firstname}", "${lastname}", "${email}", "${username}", "${currentlocation}");`).then(results => {
      db(`SELECT * FROM users;`);
      res.send(results.data);
    });
  } catch (error) {
    res.status(500).send(err);
  }
});

router.delete('/ :id', function(req, res, next) {
  const Id = req.params.id;
  try {
    db(`DELETE FROM users WHERE userId=${Id};`).then(results => {
      db(`SELECT * FROM users;`);
      res.send({message: "User was deleted"});
    })
  } catch (error) {
    res.status(500).send(err);
  }
})

module.exports = router;
