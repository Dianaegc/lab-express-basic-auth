const bcryptjs      = require("bcryptjs")
const app = require("../app")
const saltRounds    = 10

const User          = require("../models/User.model")


exports.createSignUpForm= async (req, res, next) => {
    res.render("auth/signup")
}
exports.submitSignUpForm= async(req,res, next) => {
const{username,email,password}=req.body
const salt = await bcryptjs.genSalt(saltRounds)
const hashedPassword = await bcryptjs.hash(password, salt)
const newUser = await User.create({ 
    username, 
    email, 
    passwordHash: hashedPassword }
)

console.log(newUser)

    res.render("index")
}