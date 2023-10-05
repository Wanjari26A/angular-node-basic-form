const express = require('express')
const UserController = require('../controller/UserController')

const router = express.Router();

router.get('/getAllUser', UserController.findAll);
router.get('/getUserById/:id', UserController.findOne);
router.post('/createUser', UserController.create);
router.patch('/updateUser/:id', UserController.update);
router.delete('/deleteUser/:id', UserController.destroy);
module.exports = router