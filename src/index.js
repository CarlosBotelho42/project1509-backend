const http = require('http');
const bodyParser = require('body-parser');
const express = require( 'express');
const userRouter = require('../routes');
const cors = require('cors');
const mongod = require ('./database/indexdb')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter)

const server = http.createServer(app);

server.listen(8081, async function(){
    console.log("Server Up");

})
