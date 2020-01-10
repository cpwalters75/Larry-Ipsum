const db = require("../models");

const router = require('express').Router();

router.get('/ipsum', (req, res) => {
    db.ipsums.findOne({
        where: {
            id: 1
        },
        include: [db.ipsums]
    }).then((dbPost) => {
        res.json(dbPost)
        console.log("router")
        console.log(dbPost);
    }) 
    res.json("asdfag") 
});

router.post('/api/ipsum', (req, res) => {

})

router.put('/api/hallOfLarry', (req, res) => {

})



module.exports = router;

