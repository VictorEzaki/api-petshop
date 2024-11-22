const express = require('express')
const ControllerUser = require('./../controllers/user')
const auth = require('./../middleware/auth')

const router = express.Router()

router.post('/', ControllerUser.CreateUser)
router.post('/login', ControllerUser.Login)
router.get('/', auth, ControllerUser.GetUsers)
router.put('/:idUser', auth, ControllerUser.UpdateUser)
router.delete('/:idUser', auth, ControllerUser.DeleteUser)

module.exports = router