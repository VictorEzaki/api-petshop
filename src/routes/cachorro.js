const express = require('express')
const controllerCachorro = require('./../controllers/cachorro')
const router = express.Router()

router.get('/', controllerCachorro.GetCachorros)
router.get('/:id', controllerCachorro.GetCachorrosByDono)
router.post('/', controllerCachorro.CreateCachorros)
router.put('/:id', controllerCachorro.UpdateCachorros)
router.delete('/:id', controllerCachorro.DeleteCachorros)

module.exports = router