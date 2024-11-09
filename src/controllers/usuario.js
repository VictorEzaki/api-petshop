const ServiceUsuario = require('./../services/usuario')

class ControllerUsuario {
    async GetUsuarios(req, res) {
        try {
            const usuarios = await ServiceUsuario.GetUsuarios()
            return res.status(200).send({ usuarios: usuarios })
        } catch (e) {
            return res.status(400).send({ msg: e.message })
        }
    }

    async CreateUsuario(req, res) {
        try {
            const { email, senha } = req.body
            const usuario = await ServiceUsuario.CreateUsuario(email, senha)
            return res.status(201).send({ usuario: usuario })
        } catch (e) {
            return res.status(422).send({ msg: e.message })
        }
    }

    async UpdateUsuario(req, res) {
        try {
            const { id } = req.params
            const { email, senha } = req.body
            const usuario = await ServiceUsuario.CreateUsuario(id, email, senha)
            return res.status(200).send({ usuario: usuario })
        } catch (e) {
            return res.status(422).send({ msg: e.message })
        }
    }
}

module.exports = new ControllerUsuario()