var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  db(`SELECT * FROM insights`) 
    .then(results => {
      res.send(results.data);
    })
  .catch((err) => res.status(500).send(err));
});

router.get('/:id', function(req, res, next) {
  const Id = req.params.id;
  try {
  db(`SELECT * FROM insights WHERE userId=${Id};`)
    .then(results => {
      res.send(results.data);
    });
  } catch (error) {
    res.status(500).send(err);
  }
});

router.post('/', function(req, res, next) {
  const {userId, title, category, description, ratings} = req.body;
  db(`INSERT INTO insights (title, category, description, ratings) VALUES ("${userId}", "${title}", "${category}", "${description}", "${ratings}");`).then(results => {
    res.send("new entry was added");
  })
  .catch((err) => res.status(500).send(err));
});

// router.put('/ :id', function(req, res, next) {
//   const {firstname, lastname, email, username, currentlocation} = req.body;
//   try {
//     db(`UPDATE insights SET (firstname, lastname, email, username, currentlocation) VALUES ("${firstname}", "${lastname}", "${email}", "${username}", "${currentlocation}");`).then(results => {
//       db(`SELECT * FROM users;`);
//       res.send(results.data);
//     });
//   } catch (error) {
//     res.status(500).send(err);
//   }
// });

// router.delete('/ :id', function(req, res, next) {
//   const Id = req.params.id;
//   try {
//     db(`DELETE FROM insights WHERE userId=${Id};`).then(results => {
//       db(`SELECT * FROM insights;`);
//       res.send({message: "Entry was deleted"});
//     })
//   } catch (error) {
//     res.status(500).send(err);
//   }
// })
 




module.exports = router;

