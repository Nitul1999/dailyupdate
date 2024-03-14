const mongoose = require('mongoose')

const schema = mongoose.Schema


const workoutschema = new schema({
        title:{
            type:String,
            require:true
        },
        reps:{
            type:Number,
            require:true
        },
        load:{
            type:Number,
            require: true
        }

},{timestamps:true})

module.exports = mongoose.model('Workout',workoutschema)