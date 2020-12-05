const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userModel = new Schema({
   
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false, //indica que quando busca usuario ele nao quer que a senha v3em junto
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
        require: true

    },
},

);

userModel.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})


const user = mongoose.model('User', userModel);

module.exports = user