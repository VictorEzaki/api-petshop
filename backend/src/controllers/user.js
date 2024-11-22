const ServiceUser = require('./../services/user')

class ControllerUser {
    async CreateUser(req, res) {
        try {
            const { name, email, password, phone } = req.body

            const user = await ServiceUser.CreateUser(name, email, password, phone)
            return res.status(201).send({ user: user })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar um usuário ${e.message}` })
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body

            const token = await ServiceUser.Login(email, password)
            return res.status(200).send({ token })
        } catch (e) {
            return res.status(500).send({ msg: e.message })
        }
    }

    async GetUsers(req, res) {
        try {
            const user = await ServiceUser.GetUsers()
            return res.status(200).send({ user: user })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao procurar usuários ${e.message}` })
        }
    }

    async UpdateUser(req, res) {
        try {
            const { idUser } = req.params
            const { name, email, password, phone, idRole } = req.body

            const user = await ServiceUser.UpdateUser(idUser, name, email, password, phone, idRole)
            return res.status(201).send({ user: user })
        } catch (e) {
            return res.status(400).send({ error: `Erro ao atualizar um usuário ${e.message}` })
        }
    }

    async DeleteUser(req, res) {
        try {
            const { idUser } = req.params
            
            await ServiceUser.DeleteUser(idUser)
            return res.status(201).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar um usuário ${e.message}` })
        }
    }
}

module.exports = new ControllerUser()