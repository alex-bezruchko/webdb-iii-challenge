const express = require('express');

const router = express.Router();

router.use(express.json());

router.use('/', (req, res) => {
    res.status(200).json('Cohorts rules!')
})
module.exports = router;