
const user = require('../models/userModel');
const userProfileModel = require('../models/userProfileModel');



async function profileCreate(req, res, next){
    try{
        const profile = await userProfileModel.create({ ...req.body, user: req.userId})
        
        return res.send({profile})
    }
    catch{
        return res.status(400).send({error: 'Erro ao criar um perfil!'})
    }

}

async function profileList(req, res, next){
    try {
        const profile = await userProfileModel.find().populate('user');

        return res.send({profile})

    } catch(err) {
        return res.status(400).send({error: 'Erro ao encontrar os usuarios'});
    }
}

async function profileById(req, res, next){
    
    try{   
    const profileId = await userProfileModel.findById(req.params.userprofilesId)
        if(!profileId){
            return res.status(404).end()
        }
        return res.status(200).json(profileId)
    }catch{
        return res.status(400).send({error: 'Erro ao encontrar o perfil'});
    }
}

async function deleteById(req, res, next){
    try{
    const profileId = await userProfileModel.findByIdAndDelete(req.params.userprofilesId)
    
            return res.status(200).send({message: 'Perfil deletedado ^^', profileId})
        
    }catch{
        return res.status(400).send({error: 'Erro ao deletar o perfil :c'})
    }
}

module.exports = {profileCreate, profileList, profileById, deleteById}



