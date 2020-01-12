
const router = require('express').Router();
const db = require('../models');

/*
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
*/
router.get('/ipsum/:quantity/:length', (req, res) => {
  console.log("quantity", req.params.quantity);
  console.log("length", req.params.length);
  res.json("got the message!");
})





router.post('/ipsum', (req, res) => {

});

router.put('/hallOfLarry', (req, res) => {

});


module.exports = router;
