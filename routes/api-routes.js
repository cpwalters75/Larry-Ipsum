
const router = require('express').Router();
const db = require('../models');


router.get('/ipsum', (req, res) => {
  db.ipsums.findAll({
    // include: [db.ipsums],
  }).then((dbPost) => {
    res.json(dbPost);
    console.log(dbPost);
  }).catch((error) => {
    console.error(error);
  });
  
});

router.post('/ipsum', (req, res) => {

});

router.put('/hallOfLarry', (req, res) => {

});


module.exports = router;
