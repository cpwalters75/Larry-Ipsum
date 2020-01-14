
const router = require('express').Router();
const db = require('../models');

class Build_Ipsum {
  constructor(quantity,length) {
    this.quantity = quantity,
    this.length = length
  }

  setValue() {
    let paraQuantity = '';
    let paraLength = '';
    switch(this.quantity) {
      case "one":
         paraQuantity = 1;
        break
      case "three":
         paraQuantity = 3;
        break
      case "five":
         paraQuantity = 5;
        break
      default:
         paraQuantity = 100;
    }
  
    switch(this.length) {
      case "short":
         paraLength = 3;
        break
      case "medium":
         paraLength = 5;
        break
      case "long":
         paraLength = 7;
        break
      default:
         paraLength = 1;
    }

    this.setIpsumLength(paraQuantity,paraLength);

  }

  setIpsumLength(paraQuantity, paraLength) {
      let ipsumLength = paraQuantity * paraLength;
      this.queryData(ipsumLength);
  }

  queryData(ipsumLength) {
    db.ipsums.findAll({
      include: [db.ipsums],
    }).then((dbPost)=> {
      res.json(dbPost);
      console.log(dbPost);
    }).catch((error) => {
      console.error(error);
    })
    }
  }

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
  let newIpsum = new Build_Ipsum(quantity,length);

  //newIpsum.setValue();
  res.json("this works");
})




router.post('/ipsum', (req, res) => {
  db.ipsums.create(req.body).then((dbPost) => {
    res.json(dbPost);
  });

});

router.put('/hallOfLarry', (req, res) => {

});


module.exports = router;
