const express = require('express');
const router = express.Router();
const controller = require('../controllers/suggestions.controller');

router.get('/', controller.get);

module.exports = {
    name: 'suggestions',
    router,
};