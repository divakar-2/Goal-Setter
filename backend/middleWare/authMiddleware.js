const jwt = require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User = require("../model/userModel")

const protect = asyncHandler(async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');  //exclude password from the response
            next();
        }catch (error){
            res.status(401)
            throw new Error('Not authorized to access for this route');
        }
    }
    //if no token or token is not valid then return 401 Unauthorized error message
    if(!token) {
        res.status(400);
        throw new Error('No token is Passed');
    }
});

module.exports={
    protect,
}
