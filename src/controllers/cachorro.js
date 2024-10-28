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

    async CreateCachorros (req, res) {
        try {
            const { nome, raca, peso } = req.body
            const cachorro = await serviceCachorro.CreateCachorro(nome, raca, peso)
    
            res.status(201).send({ cachorros: cachorro })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async UpdateCachorros (req, res) {
        try {
            const { id } = req.params
            const { nome, raca, peso } = req.body
            const cachorro = await serviceCachorro.UpdateCachorro(id, nome, raca, peso)
    
            res.status(200).send({ cachorros: cachorro })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async DeleteCachorros (req, res) {
        try {
            const { id } = req.params
            const cachorro = await serviceCachorro.DeleteCachorro(id)
    
            res.status(200).send({ cachorros: cachorro })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}

module.exports = new ControllerCachorro()