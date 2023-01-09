const { response } = require("express");
const mongoose = require("mongoose");
const User = require("../database/model/user")
const  { createUserQuery } = require("../query/userQuery")
const { TokenGenerator } = require("../helper/helper")

exports.userGetController = async ( req, res ) => {
    const result = await User.find();
    res.send({ data: result })
}

exports.userGetControllerById = async ( req, res ) => {
    const { id } = req.params
    const objId = new mongoose.Types.ObjectId(id);
    const result = await User.findById({ _id: objId });
    res.send({ data: result })
}

exports.userPostController = async (req, res) => {
    try{
        await createUserQuery(req)
        res.status(201).send(" Successfully created new user ")
    }catch(err){
        res.send(err.message)
    }
}

exports.usersDeleteController = (req, res) => {
    const { ids } = req.body;
    // const newDatabse = database.filter((el, index) => el.id != ids.map(item => item)[index])
    // res.status(200).send(newDatabse)
}

exports.userDeleteController = (req, res) => {
    const { id } = req.params;
    // const newDatabse = database.filter((el) => el.id != id)
    // res.status(200).send(newDatabse)
}


exports.userPutController = (req, res) => {
    const { id } = req.params;  
    const { name } = req.body
    // const newDatabse = database.map((el) => el.id == id ? el.name = name : el.name)
    // res.status(200).send(newDatabse)
} 

exports.userLogin = async (req, res) => {
    const { password, email } = req.body;
    const user = await User.findOne({ email: email })
    if(!user) res.send(" You don't have any user account, please sign up ")

    if(user.password === password && user.email === email){
        const token = await TokenGenerator({ uid: user._id, expires: 1200 })
        res.send({ token: token })
        return
    }else{
        res.send("Invalid password or email")
        return
    }
}