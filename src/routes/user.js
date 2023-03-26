const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router.get('/profile', userController.profile);
router.get('/edit', userController.edit);

module.exports = router
