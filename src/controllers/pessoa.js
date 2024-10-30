const servicePessoa = require('./../services/pessoa')

class ControllerPessoa {

    async GetPessoas (req, res) {
        try {
            const Pessoas = await servicePessoa.GetPessoas()
    
            res.status(200).send({ Pessoas: Pessoas })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async CreatePessoa (req, res) {
        try {
            const { nome, idade } = req.body
            const Pessoa = await servicePessoa.CreatePessoa(nome, idade)
    
            res.status(201).send({ Pessoas: Pessoa })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async UpdatePessoa (req, res) {
        try {
            const { id } = req.params
            const { nome, idade } = req.body
            const Pessoa = await servicePessoa.UpdatePessoa(id, nome, idade)
    
            res.status(200).send({ Pessoas: Pessoa })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async DeletePessoa (req, res) {
        try {
            const { id } = req.params
            const Pessoa = await servicePessoa.DeletePessoa(id)
    
            res.status(200).send({ Pessoas: Pessoa })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}

module.exports = new ControllerPessoa()