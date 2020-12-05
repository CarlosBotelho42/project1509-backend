const express = require('express');

const services =require('../middlewares/servicesMiddle');

const router = express.Router();

router.post('/register', services.serviceCreate)
router.get('/list', services.servicesList)
router.get('/:servicesId', services.serviceById)
router.delete('/:servicesId', services.deleteById)

module.exports = router