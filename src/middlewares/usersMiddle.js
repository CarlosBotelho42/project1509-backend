const express = require('express');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


 async function userCreate(req,res, next){
    try {
       const user = await userModel.create(req.body);

       const token = jwt.sign({id: user.id}, authConfig.secret, {
        expiresIn: 86400, 
    })

        return res.send({user, token});

    }catch (err) {
        return res.status(400).send({error: 'Erro ao criar um usuario'});
    }
}


async function usersList(req, res, next){
    try {
        const users = await userModel.find().populate('UserProfile');

        return res.send({users})

    } catch(err) {
        return res.status(400).send({error: 'Erro ao encontrar os usuarios'});
    }
}

async function userById(req, res, next){
    
    try{   
    const userId = await userModel.findById(req.params.userId)
        if(!userId){
            return res.status(404).end()
        }
        return res.status(200).json(userId)
    }catch{
        return res.status(400).send({error: 'Erro ao encontrar o usuario'});
    }
}

async function deleteById(req, res, next){
    try{
    const userId = await userModel.findByIdAndDelete(req.params.userId)
        
        return res.status(200).send({message: 'Usuario deletedado ^^', userId})

    }catch{
        return res.status(400).send({error: 'Erro ao deletar o usuario :c'})
    }
}

//rota de autenticação 
async function authenticate(req, res, next){
    const {email, password} = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({error: 'Usuario não encontrado!'});
    

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Desgraça'});

        user.password = undefined;
       
        const token = jwt.sign({id: user.id}, authConfig.secret, {
            expiresIn: 86400, 
        })

    res.send({user, token})

}


module.exports = {userCreate, usersList, authenticate, userById, deleteById};
