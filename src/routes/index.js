const router = require('express').Router();
const path = require('path');

router.get('/geo', (req, res) => {
    res.render('index');
});

module.exports = router;