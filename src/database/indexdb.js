const mongoose = require('mongoose');

const conectionURL = 'mongodb://localhost:27017/project1509';

 mongoose.connect(conectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Connection up!!')
})


module.exports = {db}

