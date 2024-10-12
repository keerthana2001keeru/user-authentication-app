const mongoose = require ('mongoose')

const UserauthenticationSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "please enter your name"],
    minlength: [3, "Full name must be at least 3 characters long"],
    maxlength: [64, "Full name cannot be longer than 64 characters"],
    trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: [3, "please enter a valid email"],
        maxLength: [64, "Please enter a valid email"],
        // validate: {
        //   validator: function (v) {
        //     return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        //   },
        //   message: "Please enter a valid email",
        // },
    },
    password:{
        type: String,
        required: true,
        minLength: [4, "Password should be greater than 4 characters"],
    },
    }
    
)

const UserModel = mongoose.model("Users",UserauthenticationSchema)
module.exports =UserModel