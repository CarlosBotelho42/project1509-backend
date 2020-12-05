const express = require('express');

const userRegister = require('../middlewares/usersMiddle');
const authMiddleware = require('../middlewares/auth');
const autV =require('../controllers/projectControler');

const router = express.Router();

router.post('/register', userRegister.userCreate)
router.get('/list', userRegister.usersList)
router.get('/:userId', userRegister.userById)
router.delete('/:userId', userRegister.deleteById)
router.post('/auth', userRegister.authenticate)
router.get('/a/authv', authMiddleware, autV.authVerification)

module.exports = router