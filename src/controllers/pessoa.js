const servicePessoa = require('./../services/pessoa')

class ControllerPessoa {

    async GetPessoas (req, res) {
        try {
            const pessoas = await servicePessoa.GetPessoas()
            res.status(200).send({ Pessoas: pessoas })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async CreatePessoa (req, res) {
        try {
            const { nome, idade } = req.body
            const pessoa = await servicePessoa.CreatePessoa(nome, idade)
    
            res.status(201).send({ Pessoas: pessoa })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async UpdatePessoa (req, res) {
        try {
            const id = req.params.id
            const { nome, idade } = req.body
            const pessoa = await servicePessoa.UpdatePessoa(id, nome, idade)
    
            res.status(200).send({ Pessoas: pessoa })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async DeletePessoa (req, res) {
        try {
            const id = req.params.id
            await servicePessoa.DeletePessoa(id)
    
            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}

module.exports = new ControllerPessoa()