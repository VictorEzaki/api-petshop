const express = require('express')
const auth = require('../middleware/auth')
const ControllerFuncionario = require('../controllers/funcionario')
const router = express.Router()

router.post('/funcionario', ControllerFuncionario.CreateFuncionario)
router.get('/funcionario', auth, ControllerFuncionario.Getfuncionarios)
router.put('/funcionario:id', auth, ControllerFuncionario.UpdateFuncionario)
router.delete('/funcionario:id', auth, ControllerFuncionario.DeleteFuncionario)
router.post('/login', ControllerFuncionario.Login)

module.exports = router