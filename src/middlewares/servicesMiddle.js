const { response } = require('express')
const servicesModel = require('../models/servicesModel')


async function serviceCreate(req, res, next){
    try{
        const service = await servicesModel.create({...req.body, profile: req.userprofilesId})
        
        return res.send({service})
    }
    catch{
        return res.status(400).send({error: 'Erro ao criar um serviço " :c'})
    }

}

async function servicesList(req, res, next){
    try {
        const service = await servicesModel.find();

        return res.send({service})

    } catch(err) {
        return res.status(400).send({error: 'Erro ao encontrar os serviços'});
    }
}

async function serviceById(req, res, next){
    
    try{   
    const serviceById = await servicesModel.findById(req.params.servicesId)
        if(!serviceById){
            return res.status(404).end()
        }
        return res.status(200).json(serviceById)
    }catch{
        return res.status(400).send({error: 'Erro ao encontrar a categoria :c'});
    }
}

async function deleteById(req, res, next){
    try{
    const serviceId = await servicesModel.findByIdAndDelete(req.params.servicesId)
        
        return res.status(200).send({message: 'Serviço deletedado ^^', serviceId})

    }catch{
        return res.status(400).send({error: 'Erro ao deletar o serviço :c'})
    }
}





module.exports = {serviceCreate, servicesList, serviceById, deleteById}