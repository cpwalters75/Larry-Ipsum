
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
  const quantity = req.params.quantity.toString();
  const length = req.params.length.toString();

  if (quantity === 'one') {
    const paraQuantity = 1;
  } else if (quantity === 'three') {
    const paraQuantity = 3;
  } else if (quantity === 'five') {
    const paraQuantity = 5;
  } else {
    res.error(404);
  }

  if (length === 'short') {
    const paraLength = 3;
  } else if (length === 'medium') {
    const paraLength = 5;
  } else if (length === 'long') {
    const paraLength = 7;
  } else {
    res.error(404);
  }
  // console.log("quantity",quantity);
  // console.log("paraQuantity",paraQuantity);
  console.log('length', length);
  console.log('paraLength', paraLength);
  res.json('got the message!');
});


router.post('/ipsum', (req, res) => {
  db.ipsums.create(req.body).then((dbPost) => {
    res.json(dbPost);
  });
});

router.get('/hall_of_larries', (req, res) => {
  
  db.hall_of_larries.findAll({}).then((data) => {
    res.json(data);
    
  });
});


module.exports = router;
