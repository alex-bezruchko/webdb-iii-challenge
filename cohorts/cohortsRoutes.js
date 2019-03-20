const express = require('express');
const cohortsDB = require('../data/helpers/cohortsDB');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {

    try {
        const cohorts = await cohortsDB.get();
        
        if (cohorts) {
            res.status(200).json(cohorts)
        }
        else {
            res.status(404).json('There are not cohorts available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const cohort = await cohortsDB.getById(id);
        
        if (cohort) {
            res.status(200).json(cohort)
        }
        else {
            res.status(404).json('There are not cohorts available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;