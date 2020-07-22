const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async(req,res) => {
    const {first_name,last_name,age,username,password} = req.body
    const repeat = await db.User.findOne({where:{username:username}})
    if(repeat) res.status(400).send({message:'Username already used'})
    else{
        const salt = bcrypt.genSaltSync(10)
        const hashedPasswprd = bcrypt.hashSync(password,salt)
        const newUser = await db.User.create({first_name,last_name,age,username,password:hashedPasswprd})
        res.status(201).send(newUser)
    }
}
const loginUser = async(req,res) => {
    const {username,password} = req.body
    const validUser = await db.User.findOne({where:{username}})
    if(!validUser) res.status(400).send({message:'Incorrect username or password'})
    else{
        const correctPassword = bcrypt.compareSync(password,validUser.password)
        if(correctPassword){
            const payload = {
                name: validUser.first_name,
                id: validUser.id
            }
            const jwtToken = jwt.sign(payload,process.env.SECRET_OR_KEY,{expiresIn:3600})
            res.status(200).send({message:'Successfully logged in',token:jwtToken,id:validUser.id})
        }
        else res.status(400).send({message:'Incorrect username or password'})
    }
}
const getUserInfo = async(req,res) => {
    const targetId = req.params.id
    const user = await db.User.findOne({where:{id:targetId}})
    if(user) {res.status(200).send(user)}
    else res.status(400).send({message:'Cannot find user'})
}
module.exports = {
    registerUser,loginUser,getUserInfo
}