const express = require('express')
const router=express.Router();
const {getGoals,postGoals,deleteGoals,putGoals} = require('../controllers/goalController')
const {protect}= require('../middleWare/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,postGoals);

router.route('/:id').put(protect,putGoals).delete(protect,deleteGoals);

module.exports=router;