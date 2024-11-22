const ModelUser = require('./../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secretKey = 'Muito-Seguro'
const salt = 12

class ServiceUser {
    async CreateUser(name, email, password, phone) {
        if (!name || !email || !password || !phone) {
            throw new Error('Preencha todos os campos!')
        }

        const hashPassword = await bcrypt.hash(password, salt)

        return await ModelUser.create({
            name,
            email,
            password: hashPassword,
            phone,
            idRole: 1
        })
    }

    async Login(email, password) {
        if (!email || !password) {
            throw new Error('Preencha todos os campos!')
        }

        const user = await ModelUser.findOne({ where: { email } })

        if (!user) {
            throw new Error('Email ou senha inválidos!')
        }

        const validPassword = bcrypt.compare(password, user.password)

        if (!validPassword) {
            throw new Error('Email ou senha inválidos!')
        }

        return jwt.sign({ id: user.id }, secretKey, { expiresIn: 60 * 60 })
    }

    async GetUsers() {
        const users = await ModelUser.findAll()
        return users
    }

    async UpdateUser(idUser, name, email, password, phone, idRole) {
        if (!idUser) {
            throw new Error('Favor informar o ID!')
        }

        const user = await ModelUser.findByPk(idUser)
        if (!user) {
            throw new Error('Usuário não encontrada!')
        }

        user.name = name || user.name
        user.email = email || user.email
        user.password = password ? await bcrypt.hash(password, salt) : user.password
        user.phone = phone || user.phone
        user.idRole = idRole || user.idRole

        user.save()
        return user
    }

    async DeleteUser(idUser) {
        if (!idUser) {
            throw new Error('Favor informa o ID!')
        }

        const user = await ModelUser.findByPk(idUser)
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }

        return user.destroy()
    }
}

module.exports = new ServiceUser()