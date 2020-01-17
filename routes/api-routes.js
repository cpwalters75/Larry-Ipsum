
const router = require('express').Router();
const db = require('../models');
const nodemailer = require('nodemailer');

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
    let data = {
      ipsum: dbPost,
      length : paraLength
    }
    res.json(data);

  }).catch((error) => {
    console.error(error);
  });
});

router.post('/ipsum', (req, res) => {
  db.ipsums.create(req.body).then((dbPost) => {
    res.json(dbPost);
  });
});

router.post('/send', (req, res) => {
  const recipient = req.body.to;
  const message = req.body.text;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: 'Your Larry Larry Larry',
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Larror has occurred', err);
    } else {
      console.log(`Email has been sent to ${recipient}`);
      
    }
  });
 
});

router.get('/hall_of_larries', (req, res) => {
  
  db.hall_of_larries.findAll({
    order:  [['larry_birthdate', 'DESC'],
    ],
  }).then((data) => {
    res.json(data);
    
  });
});


module.exports = router;
