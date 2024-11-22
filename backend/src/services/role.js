const ModelRole = require('./../models/role')

class ServiceRole {
    async CreateRole(nameRole) {
        if (!nameRole) {
            throw new Error('Preencha todos os campos!')
        }

        return await ModelRole.create({ nameRole })
    }
}

module.exports = new ServiceRole()