const express = require('express')
const ControllerRole = require('./../controllers/role')
const router = express.Router()

router.post('/', ControllerRole.CreateRole)

module.exports = router