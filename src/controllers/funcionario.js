const ServiceFuncionario = require('../services/funcionario')

class ControllerFuncionario {

    async Getfuncionarios(req, res) {
        try {
            const funcionarios = await ServiceFuncionario.GetFuncionarios()
            res.status(200).send({ funcionarios: funcionarios })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async CreateFuncionario(req, res) {
        try {
            const { nome, senha, telefone } = req.body
            // Store hash in your password DB.
            const funcionario = await ServiceFuncionario.CreateFuncionario(nome, senha, telefone)
            res.status(201).send({ funcionarios: funcionario })

        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async UpdateFuncionario(req, res) {
        try {
            const id = req.params.id
            const { nome, senha, telefone } = req.body
            const funcionario = await ServiceFuncionario.UpdateFuncionario(id, nome, senha, telefone)

            res.status(200).send({ funcionarios: funcionario })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async DeleteFuncionario(req, res) {
        try {
            const id = req.params.id
            await ServiceFuncionario.DeleteFuncionario(id)

            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async Login(req, res) {
        try {
            const { nome, senha } = req.body
            const token = await ServiceFuncionario.Login(nome, senha)
            res.status(200).send({ token })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}

module.exports = new ControllerFuncionario()