const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require ('./userModel')

const userProfileModel = new Schema({
    
    speciality: {
        type: String
    },
    classification: {
        type: String
    },
    disponible_time: {
        type: String
        
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    services: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Services',
        require: true,
     }],
     createAt: {
         type: Date,
         default: Date.now,
     },
},

);


const userProfile = mongoose.model('UserProfile', userProfileModel);

module.exports = userProfile