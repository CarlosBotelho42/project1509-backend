const http = require('http');
const bodyParser = require('body-parser');
const express = require( 'express');
const cors = require('cors');

const userRouter = require('./routes/userRoute');
const profileRouter = require('./routes/profileRoute');
const categoryRouter = require('./routes/categoryRoute');
const serviceRouter = require('./routes/serviceRoute');
const authV = require('./middlewares/auth');
const router = require('./routes/categoryRoute');


require ('./database/indexdb')

const app = express();

app.use(bodyParser.json());
app.use(cors());

router.use(authV)

app.use('/user', userRouter)
app.use('/profile', profileRouter)
app.use('/category', categoryRouter)
app.use('/services', serviceRouter)

const server = http.createServer(app);

server.listen(8081, async function(){
    console.log("Server Up");

})
