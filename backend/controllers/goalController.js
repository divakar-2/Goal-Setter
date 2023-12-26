const asyncHandler = require('express-async-handler')
const getGoals =asyncHandler(async(req,res) =>{
    res.status(200).json({msg : 'Get goals controller '})
});

const postGoals =asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter text field');
    }
    res.status(200).json({msg : 'set goals controller '})
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