const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User = require('../model/userModel')

const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body;
    if(!email || !name || !password){
        res.status(400)
        throw new Error('Please fill all fields')
    }
    const userExist = await User.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error("Email is already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({
        name,email,password:hashedPassword,
    })

    if(user){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateJWT(user.id),
        });
    }
    else
    {
        res.status(400)
        throw new Error('Invalid User data');
    }
});

const loginUser= asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    const user= await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateJWT(user.id),
        });
    }else{
        res.status(400)
        throw new Error('Invalid details')
    }
});

const generateJWT= (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

const getMe=asyncHandler(async(req,res)=>{
    const {_id,name,email} = await User.findById(req.user.id);
    res.json({id:_id,name,email})
});

module.exports={
    registerUser,
    loginUser,getMe,
}