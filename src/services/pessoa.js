const modelPessoa = require('./../models/pessoa')

class ServicePessoa {

    async GetPessoas(){
        return modelPessoa.findAll()
    }

    async CreatePessoa(nome, idade) {
        if (!nome || !idade) {
            throw new Error('Preencha todos os campos!')
        }
        return modelPessoa.create({
            nome: nome,
            idade: idade
        })
    }

    async UpdatePessoa(id, nome, idade) {
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const pessoa = await modelPessoa.findByPk(id)
        if (!pessoa) {
            throw new Error('pessoa não encontrado!')
        }
        pessoa.nome = nome || pessoa.nome
        pessoa.idade = idade || pessoa.idade

        pessoa.save()
        return pessoa
    }

    async DeletePessoa(id) {
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const pessoa = await modelPessoa.findByPk(id)
        if (!pessoa) {
            throw new Error('pessoa não encontrado!')
        }
        return pessoa.destroy()
    }

}

module.exports = new ServicePessoa()