const express = require('express');

const router = express.Router();
router.use(express.json());

router.use('/', (req, res) => {
    res.status(200).json('Students rules!')
})

module.exports = router;