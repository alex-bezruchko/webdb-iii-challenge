const express = require('express');
const studentsDb = require('../data/helpers/studentsDb');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {

    try {
        const students = await studentsDb.get();
        
        if (students) {
            res.status(200).json(students)
        }
        else {
            res.status(404).json('There are not students available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const student = await studentsDb.getById(id);
        
        if (student) {
            res.status(200).json(student)
        }
        else {
            res.status(404).json('This id is not available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

router.post('/', async (req, res) => {
    const newStudent = req.body;
    try {
        const student = await studentsDb.insert(newStudent);
        
        if (student) {
            res.status(201).json(student)
        }
        else {
            res.status(404).json('Name is required.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updateStudent = req.body;
    try {
        const updated = await studentsDb.update(id, updateStudent);
        
        if (updated) {
            res.status(201).json('Student was successfully updated.')
        }
        else {
            res.status(404).json('This id is not available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await studentsDb.remove(id);
        
        if (deleted) {
            res.status(201).json('Student was successfully deleted.')
        }
        else {
            res.status(404).json('This id is not available.')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;

module.exports = router;