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
    try {
        const cohort = await cohortsDB.getById(id);
        
        if (cohort) {
            res.status(200).json(cohort)
        }
        else {
            res.status(404).json('This is is not available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

router.post('/', async (req, res) => {
    const user = req.body;
    try {
        const cohort = await cohortsDB.insert(user);
        
        if (cohort) {
            res.status(201).json(cohort)
        }
        else {
            res.status(404).json('Name is required.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;