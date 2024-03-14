const { mongoose } = require('mongoose')
const Workout = require('../model/workoutschema')



// get all workout
const workout = async(req,res)=>{
  const workouts = await Workout.find({}).sort({createAt: -1})

  res.status(200).json(workouts)
}

//get a single workout
const workoutsingle = async(req,res)=>{
    const {id} = req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "not valid id"})
    }
    const works = await Workout.findById(id)

    if(!works){
        return res.status(404).json({error: ' not found '})
    }

    res.status(200).json(works)

    
}

//create a new workout
const createworkout = async(req,res)=>{
      const {title,reps,load}=req.body
    
    try{ 
        const works = await Workout.create({title,reps,load})
       
        res.status(200).json(works)
        console.log("added new item")

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//delete a  workout

const deletework=async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'not found'})
    }

    const work = await Workout.findOneAndDelete({_id: id})
     if(!work){
        res.status(404).json({error:' document not found'})
     }
     res.status(200).json(work)
     console.log(" item deleted")

}

// update a workout

const updatework =async(req,res)=>{

  const {id} = req.params

   if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:"not a valid id"})
   } 

   const works = await Workout.findOneAndUpdate({_id: id},{
    ...req.body
   })
   if(!works){
    res.status(400).json({error: ' not available'})
   }

   res.status(200).json(works)
}

module.exports ={createworkout,workout,workoutsingle,deletework,updatework}
