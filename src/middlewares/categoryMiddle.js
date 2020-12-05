const { response } = require('express')
const categoryModel = require('../models/categoryModel')


async function categoryCreate(req, res, next){
    try{
        const category = await categoryModel.create({...req.body, user: req.userprofilesId})
        
        return res.send({category})
    }
    catch{
        return res.status(400).send({error: 'Erro ao criar uma tegoria" :c'})
    }

}

async function categoryList(req, res, next){
    try {
        const categories = await categoryModel.find();

        return res.send({categories})

    } catch(err) {
        return res.status(400).send({error: 'Erro ao encontrar as categorias'});
    }
}

async function categoryById(req, res, next){
    
    try{   
    const categoryId = await categoryModel.findById(req.params.categoriesId)
        if(!categoryId){
            return res.status(404).end()
        }
        return res.status(200).json(categoryId)
    }catch{
        return res.status(400).send({error: 'Erro ao encontrar a categoria :c'});
    }
}

async function deleteById(req, res, next){
    try{
    const categoryId = await categoryModel.findByIdAndDelete(req.params.categoriesId)
        
        return res.status(200).send({message: 'Categoria deletedada ^^', categoryId})

    }catch{
        return res.status(400).send({error: 'Erro ao deletar a categoria :c'})
    }
}



module.exports = {categoryCreate, categoryList, categoryById, deleteById};