const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
    },
    email:{
        type:String,
        required:[true,'This Email is already taken or enter a valid email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please enter a password'],
    },
},{
    timestamps: true  //Saves createdAt and updatedAt as dates (default=false)
})

module.exports = mongoose.model('User',userSchema);