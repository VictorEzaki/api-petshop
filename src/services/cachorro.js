const modelCachorro = require('./../models/cachorro')

class ServiceCachorro {

    async GetCachorros(){
        return modelCachorro.findAll()
    }

    async CreateCachorro(nome, raca, peso) {
        return modelCachorro.create({
            nome: nome,
            raca: raca,
            peso: peso
        })
    }

    async UpdateCachorro(id, nome, raca, peso) {
        return modelCachorro.update({
            nome: nome,
            raca: raca,
            peso: peso
        }, 
        {   
            where: {
                id: id
            }
        })
    }

    async DeleteCachorro(id) {
        return modelCachorro.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = new ServiceCachorro()