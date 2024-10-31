const pessoa = require('./../models/pessoa')
const modelCachorro = require('./../models/cachorro')

class ServiceCachorro {

    async GetCachorros(){
        return modelCachorro.findAll()
    }

    async GetCachorrosByDono(idPessoa){
        return modelCachorro.findAll({ where: { idPessoa }})
    }

    // async GetCachorrosByDono(idPessoa){
    //     return modelCachorro.findByPk(idPessoa, { include: pessoa })
    // }

    async CreateCachorro(nome, raca, peso, idPessoa) {
        if (!nome || !raca || !peso || !idPessoa) {
            throw new Error('Preencha todos os campos!')
        }
        return modelCachorro.create({ nome, raca, peso, idPessoa })
    }

    async UpdateCachorro(id, nome, raca, peso, idPessoa) {
        // Método mais recomendado
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const cachorro = await modelCachorro.findByPk(id)
        if (!cachorro) {
            throw new Error('Cachorro não encontrado!')
        }
        cachorro.nome = nome || cachorro.nome
        cachorro.raca = raca || cachorro.raca
        cachorro.peso = peso || cachorro.peso
        cachorro.idPessoa = idPessoa || cachorro.idPessoa

        cachorro.save()
        return cachorro

        // return modelCachorro.update({
        //     nome: nome,
        //     raca: raca,
        //     peso: peso
        // }, 
        // {   
        //     where: {
        //         id: id
        //     }
        // })
    }

    async DeleteCachorro(id) {
        // modo mais recomendado, pois pode fazer tratativa de erros
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const cachorro = await modelCachorro.findByPk(id)
        if (!cachorro) {
            throw new Error('Cachorro não encontrado!')
        }
        return cachorro.destroy()

        // return modelCachorro.destroy({
        //     where: {
        //         id: id
        //     }
        // })
    }

}

module.exports = new ServiceCachorro()