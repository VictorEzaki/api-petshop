const ModelUsuario = require('./../models/usuario')
const bcrypt = require('bcrypt');
const saltRounds = 12;
const jwt = require('jsonwebtoken')

class ServiceUsuario {
    async CreateUsuario(email, senha) {
        if (!email || !senha) {
            throw new Error('Preencha todos os campos!')
        }

        const hashSenha = await bcrypt.hash(senha, saltRounds)
        return ModelUsuario.create({ email, senha: hashSenha, permissao: "cliente" })
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error('Preencha todos os campos!')
        }

        const usuario = await ModelUsuario.findOne({ where: { email } })
        if (!usuario) {
            throw new Error('E-mail ou senha inválidos!')
        }

        const senhaValida = bcrypt.compare(senha, usuario.senha)
        if (!senhaValida) {
            throw new Error('E-mail ou senha inválidos!')
        }

        return jwt.sign({ id: usuario.id, permisssao: usuario.permisssao }, 'segredo', { expiresIn: 60 * 60 })
    }
}

module.exports = new ServiceUsuario()