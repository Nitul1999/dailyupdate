
const express = require('express')
const router = express.Router()
const { createworkout,workout,workoutsingle,deletework, updatework } =require('../controllers/worksoutcontroller') //init controller

// get all workout data
router.get('/',workout)

// get a signle work
router.get('/:id',workoutsingle)


//post a new work
router.post('/',createworkout)

// delete a  workout
router.delete('/:id',deletework)


//update a document 
router.patch('/:id',updatework)



module.exports = router