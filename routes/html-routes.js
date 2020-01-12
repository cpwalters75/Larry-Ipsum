const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/ipsum', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/ipsum.html'));
});

router.get('/hallOfLarry', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/hallOfLarry.html'));
});

router.get('/ipsum/whatIsLarry', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/larryDefined.html'));
});

// Place this route below all others to send the index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
