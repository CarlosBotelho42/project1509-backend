const express = require('express');

const userRegister = require('./src/middlewares/usersMiddle');

const router = express.Router();

router.post('/register', userRegister.userCreate)
router.get('/findall', userRegister.usersList)


module.exports = router