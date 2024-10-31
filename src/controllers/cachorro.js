const serviceCachorro = require('./../services/cachorro')

class ControllerCachorro {

    async GetCachorros (req, res) {
        try {
            const cachorros = await serviceCachorro.GetCachorros()
    
            res.status(200).send({ cachorros: cachorros })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async GetCachorrosByDono (req, res) {
        try {
            const idPessoa = req.params.idPessoa
            const cachorros = await serviceCachorro.GetCachorrosByDono(idPessoa)
    
            res.status(200).send({ cachorros: cachorros })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async CreateCachorros (req, res) {
        try {
            const { nome, raca, peso, idPessoa } = req.body
            const cachorro = await serviceCachorro.CreateCachorro(nome, raca, peso, idPessoa)
    
            res.status(201).send({ cachorros: cachorro })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async UpdateCachorros (req, res) {
        try {
            const id = req.params.id
            const { nome, raca, peso, idPessoa } = req.body
            const cachorro = await serviceCachorro.UpdateCachorro(id, nome, raca, peso, idPessoa)
    
            res.status(200).send({ cachorros: cachorro })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async DeleteCachorros (req, res) {
        try {
            const id = req.params.id
            await serviceCachorro.DeleteCachorro(id)
            // Não é recomendado ter um retorno 
    
            res.status(204).send()
        } catch (e) {
            res.status(404).send({ msg: e.message })
        }
    }

}

module.exports = new ControllerCachorro()