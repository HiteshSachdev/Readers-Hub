const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/shelves/:userId', userController.getShelves);
router.post('/shelf', userController.createNewShelf);
router.post('/shelf/add-book', userController.insertIntoShelf);
router.get('/:id',userController.getUserById)

module.exports = router;