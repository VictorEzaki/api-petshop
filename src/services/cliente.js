const modelPessoa = require('../models/cliente')
const bcrypt = require('bcrypt');
const saltRounds = 12;
const jwt = require('jsonwebtoken')


class ServicePessoa {
    async GetPessoas() {
        return modelPessoa.findAll()
    }

    async CreatePessoa(nome, idade, senha, telefone) {
        if (!nome || !idade || !senha || !telefone) {
            throw new Error('Preencha todos os campos!')
        }
        const hashSenha = await bcrypt.hash(senha, saltRounds)
        return modelPessoa.create({
            nome: nome,
            idade: idade,
            senha: hashSenha,
            telefone: telefone,
            permissao: 1
        })
    }

    async UpdatePessoa(id, nome, idade, senha, telefone) {
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const pessoa = await modelPessoa.findByPk(id)
        if (!pessoa) {
            throw new Error('pessoa não encontrado!')
        }
        pessoa.nome = nome || pessoa.nome
        pessoa.idade = idade || pessoa.idade
        pessoa.senha = senha
            ? await bcrypt.hash(senha, saltRounds)
            : pessoa.senha
        pessoa.telefone = telefone || pessoa.telefone

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

    async Login(nome, senha) {
        if (!nome || !senha) {
            throw new Error('Nome ou senha inválidos!')
        }

        const pessoa = await modelPessoa.findOne({ where: {nome} })

        if (!pessoa) {
            throw new Error('Nome ou senha inválidos!')
        }

        const senhaValida = bcrypt.compare(senha, pessoa.senha)

        if (!senhaValida) {
            throw new Error('Nome ou senha inválidos!')   
        }

        return jwt.sign({ id: pessoa.id }, 'segredo', { expiresIn: 60 * 60 })
    }

}

module.exports = new ServicePessoa()