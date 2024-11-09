const express = require('express')
const ControllerUsuario = require('./../controllers/usuario')
const router = express.Router()

router.post('/usuario/', ControllerUsuario.CreateUsuario)
// router.post('/usuario/', ControllerUsuario.Login)
router.get('/usuario/', ControllerUsuario.GetUsuarios)
// router.put('/usuario/:id', ControllerUsuario.UpdateUsuario)
// router.delete('/usuario/:id', ControllerUsuario.DeleteUsuario)

module.exports = router