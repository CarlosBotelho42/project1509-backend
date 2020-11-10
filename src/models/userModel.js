const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, //indica que quando busca usuario ele nao quer que a senha v3em junto
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
    
},
{_id: true, collation: 'users' }

);


const user = mongoose.model('User', userModel);

module.exports = user