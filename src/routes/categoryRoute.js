const express = require('express');

const category = require('../middlewares/categoryMiddle');

const router = express.Router();

router.post('/register', category.categoryCreate)
router.get('/list', category.categoryList)
router.get('/:categoriesId', category.categoryById)
router.delete('/:categoriesId', category.deleteById)



module.exports = router