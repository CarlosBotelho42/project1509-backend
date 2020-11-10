const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const { response } = require('express');



const userCreate = (req, res, next) => {
let user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
})
user.save()
.then(response => {
    res.json({
        message: 'User Createded!!!!'
    })
})
.catch(error => {
    res.json({
        message : 'An error to create user!!'
    })
})
}

const usersList = (req, res, next) => {
    userModel.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error to find users!!'
        })
    })
}


// async function user(req, res, next){

//     result = await req.body;
//     userModel.create(result);

//     return res.send(req.body);

// }



module.exports = {userCreate, usersList};
