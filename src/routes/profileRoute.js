const express = require('express');

const userProfileRegister = require('../middlewares/userProfileMiddle');

const router = express.Router();

router.post('/register', userProfileRegister.profileCreate)
router.get('/list', userProfileRegister.profileList)
router.get('/:userprofilesId', userProfileRegister.profileById)
router.delete('/:userprofilesId', userProfileRegister.deleteById)

module.exports = router