const servicePessoa = require('../services/cliente')

class ControllerPessoa {

    async GetPessoas(req, res) {
        try {
            const pessoas = await servicePessoa.GetPessoas()
            res.status(200).send({ Pessoas: pessoas })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async CreatePessoa(req, res) {
        try {
            const { idUsuario } = req.params
            const { nome, dtNasc, telefone } = req.body
            // Store hash in your password DB.
            const pessoa = await servicePessoa.CreatePessoa(nome, dtNasc, telefone, idUsuario)
            res.status(201).send({ Pessoas: pessoa })

        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async UpdatePessoa(req, res) {
        try {
            const id = req.params.id
            const { nome, idade, senha, telefone } = req.body
            const pessoa = await servicePessoa.UpdatePessoa(id, nome, idade, senha, telefone)

            res.status(200).send({ Pessoas: pessoa })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async DeletePessoa(req, res) {
        try {
            const id = req.params.id
            await servicePessoa.DeletePessoa(id)

            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Login(req, res) {
        try {
            const { nome, senha } = req.body
            const token = await servicePessoa.Login(nome, senha)
            res.status(200).send({ token })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}

module.exports = new ControllerPessoa()