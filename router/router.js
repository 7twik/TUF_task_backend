// router.js
const express = require('express');
const router = express.Router();
const controller = require('./../controller/controller');

router.get('/show', controller.show);
router.post('/submit', controller.submit);

module.exports = router;
