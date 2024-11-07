const express = require('express')
const auth = require('../middleware/auth')
const controllerPessoa = require('../controllers/cliente')
const router = express.Router()

router.post('/pessoa', controllerPessoa.CreatePessoa)
router.get('/pessoa', auth, controllerPessoa.GetPessoas)
router.put('/pessoa:id', auth, controllerPessoa.UpdatePessoa)
router.delete('/pessoa:id', auth, controllerPessoa.DeletePessoa)
router.post('/login', controllerPessoa.Login)

module.exports = router