const asyncHandler = require('express-async-handler')

const Goal= require('../model/goalModel')

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

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found');
    }
    const goals= await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true, 
    })
    res.status(200).json(goals)
});

const deleteGoals =asyncHandler(async(req,res) =>{
    const goal = await Goal.deleteOne({_id:req.params.id})
    res.status(400).json({id:req.params.id});
});

module.exports={
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
};