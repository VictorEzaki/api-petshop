const database = require('../config/database')

class ModelPessoa {
    constructor() {
        this.model = database.db.define('pessoas', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            nome: {
                type: database.db.Sequelize.STRING
            },

            idade: {
                type: database.db.Sequelize.INTEGER
            },

            senha: {
                type: database.db.Sequelize.STRING
            },

            telefone: {
                type: database.db.Sequelize.STRING,
                unique: true
            },

            permissao: {
                type: database.db.Sequelize.INTEGER
            }
        })
    }
}

module.exports = new ModelPessoa().model