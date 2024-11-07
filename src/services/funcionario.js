const ModelFuncionario = require('./../models/funcionario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12

class ServiceFuncionario{
    async GetFuncionarios() {
        return ModelFuncionario.findAll()
    }

    async CreateFuncionario(nome, senha, telefone) {
        if (!nome || !senha || !telefone) {
            throw new Error('Preencha todos os campos!')
        }
        const hashSenha = await bcrypt.hash(senha, saltRounds)
        return ModelFuncionario.create({
            nome: nome,
            senha: hashSenha,
            telefone: telefone,
            permissao: 2
        })
    }

    async UpdateFuncionario(id, nome, senha, telefone) {
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const funcionario = await ModelFuncionario.findByPk(id)
        if (!funcionario) {
            throw new Error('funcionario não encontrado!')
        }
        funcionario.nome = nome || funcionario.nome
        funcionario.senha = senha
            ? await bcrypt.hash(senha, saltRounds)
            : funcionario.senha
        funcionario.telefone = telefone || funcionario.telefone

        funcionario.save()
        return funcionario
    }

    async DeleteFuncionario(id) {
        if (!id) {
            throw new Error('Informe um ID!')
        }
        const funcionario = await ModelFuncionario.findByPk(id)
        if (!funcionario) {
            throw new Error('funcionario não encontrado!')
        }
        return funcionario.destroy()
    }

    async Login(nome, senha) {
        if (!nome || !senha) {
            throw new Error('Nome ou senha inválidos!')
        }

        const funcionario = await ModelFuncionario.findOne({ where: {nome} })

        if (!funcionario) {
            throw new Error('Nome ou senha inválidos!')
        }

        const senhaValida = bcrypt.compare(senha, funcionario.senha)

        if (!senhaValida) {
            throw new Error('Nome ou senha inválidos!')   
        }

        return jwt.sign({ id: funcionario.id }, 'segredo', { expiresIn: 60 * 60 })
    }
}

module.exports = new ServiceFuncionario()