const registerUser=(req,res)=>{
    res.status(200).json({message:'User Register Buddy'});
}

const loginUser=(req,res)=>{
    res.status(200).json({message:'User logged in'});
}

const getMe=(req,res)=>{
    res.status(200).json({message:'User fetched'});
}

module.exports={
    registerUser,
    loginUser,getMe,
}