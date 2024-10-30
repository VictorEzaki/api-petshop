const modelPessoa = require('./../models/pessoa')

class ServicePessoa {

    async GetPessoas(){
        return modelPessoa.findAll()
    }

    async CreatePessoa(nome, idade) {
        return modelPessoa.create({
            nome: nome,
            idade: idade
        })
    }

    async UpdatePessoa(id, nome, idade) {
        return modelPessoa.update({
            nome: nome,
            idade: idade
        }, 
        {   
            where: {
                id: id
            }
        })
    }

    async DeletePessoa(id) {
        return modelPessoa.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = new ServicePessoa()