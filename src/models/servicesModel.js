const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesModel = new Schema({
    
    assingnedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
        require: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category',
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
},


);


const service = mongoose.model('Services', servicesModel);

module.exports = service