
const router = require('express').Router();
const db = require('../models');

router.get('/ipsum/:quantity/:length', (req, res) => {
  
  let quantity = req.params.quantity;
  let length = req.params.length;

  let paraQuantity = '';
  let paraLength = '';

  switch(quantity) {
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

  switch(length) {
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

  let ipsumLength = paraQuantity * paraLength;

  db.ipsums.findAll({  order: [ db.Sequelize.fn( 'RAND' ) ], limit: ipsumLength }).then((dbPost) => {
    let ipsum = '';
    dbPost.forEach((line)=> {
      ipsum += line.quote + " ";
    });

   res.json(ipsum);

  }).catch((error) => {
    console.error(error);
  });
});




router.post('/ipsum', (req, res) => {
  db.ipsums.create(req.body).then((dbPost) => {
    res.json(dbPost);
  });

});

router.put('/hallOfLarry', (req, res) => {

});


module.exports = router;
