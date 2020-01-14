
const router = require('express').Router();
const db = require('../models');

class BUILD_IPSUM {
  constructor(quantity,length) 
  {
    quantity: this.quantity,
    length: this.length
  }

  setIpsumLength(paraQuantity, paraLength) {
      return ipsumLength = this.quantity * this.length;
  }
};

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
  
  let quantity = req.params.quantity;
  let length = req.params.length;

 
  if (quantity == "one") {
    let paraQuantity = 1;
    return paraQuantity;
  }
  else if (quantity == "three") {
    let paraQuantity = 3;
    return paraQuantity;
  }
  else if (quantity == "five") {
    let paraQuantity = 5;
    return paraQuantity;
  }
  else {
    res.err(404);
  }

  if (length === "short") {
    let paraLength = 3;
    return paraLength;
  } else if (length === "medium") {
    let paraLength = 5;
    return paraLength;
  } else if (length === "long") {
    let paraLength = 7;
    return paraLength;
  } else {
    res.error(404);
  }

  let ipsum = paraQuantity * paraLength



  res.json(data);
})




router.post('/ipsum', (req, res) => {
  db.ipsums.create(req.body).then((dbPost) => {
    res.json(dbPost);
  });

});

router.put('/hallOfLarry', (req, res) => {

});


module.exports = router;
