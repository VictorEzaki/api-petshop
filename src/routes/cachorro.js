const express = require('express')
const controllerCachorro = require('./../controllers/cachorro')
const router = express.Router()

router.get('/cachorro/', controllerCachorro.GetCachorros)
router.get('/cachorro/:idPessoa', controllerCachorro.GetCachorrosByDono)
router.post('/cachorro/', controllerCachorro.CreateCachorros)
router.put('/cachorro/:id', controllerCachorro.UpdateCachorros)
router.delete('/cachorro/:id', controllerCachorro.DeleteCachorros)

module.exports = router