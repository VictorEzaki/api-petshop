const express = require('express')
const controllerPessoa = require('./../controllers/pessoa')
const router = express.Router()

router.get('/pessoa', controllerPessoa.GetPessoas)
router.post('/pessoa', controllerPessoa.CreatePessoa)
router.put('/pessoa:id', controllerPessoa.UpdatePessoa)
router.delete('/pessoa:id', controllerPessoa.DeletePessoa)

module.exports = router