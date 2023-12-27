const asyncHandler = require('express-async-handler')

const goal= require('../model/goalModel')

const getGoals =asyncHandler(async(req,res) =>{
    const goals= await goal.find();
    res.status(200).json(goals)
});

const postGoals =asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter text field');
    }
    const goal=await goal.create(
        {
            text:req.body.text
        })
    res.status(200).json(goal)
});

const putGoals =asyncHandler(async(req,res) =>{
    res.status(200).json({msg : `Post goals cotroller ${req.params.id}`})
});

const deleteGoals =asyncHandler(async(req,res) =>{
    res.status(200).json({msg : `delete goals cotroller ${req.params.id}`})
});

module.exports={
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
};