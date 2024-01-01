const asyncHandler = require('express-async-handler')

const Goal= require('../model/goalModel')
const User= require('../model/userModel')

const getGoals =asyncHandler(async(req,res) =>{
    const goals= await Goal.find({user: req.user.id});
    res.status(200).json(goals);
});

const postGoals =asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter text field');
    }
    const goal=await Goal.create(
        {
            text : req.body.text,
            user : req.user.id,
        });
    res.status(200).json(goal);
});

const putGoals =asyncHandler(async(req,res) =>{
    let goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('No goal with the provided ID')
    }
        // make sure user is owner of this goal
    if (req.user.id!==goal.user.toString()) {
        return res.status(401).json({msg:'Not authorized'})
    }
        // update the goal
    goal = await Goal.findByIdAndUpdate(req.params.id , req.body)
    res.status(200).json(goal);
            
    // const goal = await Goal.findById(req.params.id);

    // if(!goal){
    //     res.status(400)
    //     throw new Error('goal not found');
    // }
    // const user = await User.findById(req.user.id)
    // if(!user){
    //     res.status(401)
    //     throw new Error('user not found')
    // }
    

    // if(goal.user.toString() !== user.id){
    //     res.status(400)
    //     throw new Error('User Not Authorized');
    // }

    // const goals= await Goal.findByIdAndUpdate(req.params.id,req.body,{
    //     new:true, 
    // })
    // res.status(200).json(goals)
});

const deleteGoals =asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error("Goal Doesn't Exist")
        }
        // Checking if user owns the goal before deleting it
        if(goal.user != req.user.id) {
            res.status(401)
            throw new Error("You don't have permission to do that.")
            }

           // await goal.remove()
            //res.json({message:"Deleted Goal Successfully"})
            // exporting all routes

    // const user=await User.findById(req.user.id)
    // if(!user){
    //     res.status(400)
    //     throw new Error('user not found')
    // }

    // if(goal.user.toString !== req.user.id){
    //     res.status(400)
    //     throw new Error('User Not Authorized');
    // }
    await Goal.deleteOne({_id:req.params.id})
    res.status(400).json({message:"Deleted Goal Successfully"});
});

module.exports={
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
};