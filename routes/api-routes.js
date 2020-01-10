const router = require('express').Router();

router.get('/', (req, res) => res.json('Sample API get endpoint'));

router.post('/api/ipsum', (req, res) => {

})

router.put('/api/hallOfLarry', (req, res) => {

})



module.exports = router;
