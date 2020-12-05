const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categoryModel = new Schema({
    
    description: {
        type: String,
        required: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Services',
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
    
},

);


const category = mongoose.model('Category', categoryModel);

module.exports = category