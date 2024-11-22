const ServiceRole = require('./../services/role')

class ControllerRole {
    async CreateRole(req, res) {
        try {
            const { nameRole } = req.body

            const role = await ServiceRole.CreateRole(nameRole)
            return res.status(201).send({ role: role })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar uma role ${e.message}` })
        }
    }
}

module.exports = new ControllerRole()