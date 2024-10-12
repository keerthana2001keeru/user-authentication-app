const express = require("express")
const mongoose= require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Userauthentication')
//const userSchema= require('./models/Userauthetication')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/userauthentication");

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password ===password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record")
        }
    })
})
app.post('/register',(req,res)=>{
UserModel.create(req.body)
.then (users => res.json(users))
.catch(err =>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running");
})