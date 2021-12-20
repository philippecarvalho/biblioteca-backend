const express = require('express');
const router = express.Router();
const Obra = require('../models/Obra');
const controller = require('../controllers/obras');

router.get('/', controller.getBooks);
router.get('/:id', controller.getBook);
router.post('/', controller.addBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.removeBook);

module.exports = router;
