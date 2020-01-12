
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
  let quantity = req.params.quantity.toString();
  let length = req.params.length.toString();

  if (quantity === "one") {
   let paraQuantity = 1;
  } 
  else if (quantity === "three") {
   let paraQuantity = 3;
  } 
  else if (quantity === "five") {
   let paraQuantity = 5;
  } 
  else {
    res.error(404);
  }

  if (length === "short") {
   let paraLength = 3;
  } else if (length === "medium") {
   let paraLength = 5;
  } else if (length === "long") {
   let paraLength = 7;
  } else {
    res.error(404);
  }
 // console.log("quantity",quantity);
  //console.log("paraQuantity",paraQuantity);
  console.log("length",length);
  console.log("paraLength",paraLength);
  res.json("got the message!");
})




router.post('/ipsum', (req, res) => {

});

router.put('/hallOfLarry', (req, res) => {

});


module.exports = router;
