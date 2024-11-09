const database = require('./../config/database')

class ModelUsuario {
    constructor() {
        this.model = database.db.define('usuarios', {
            id: {
                type: database.db.Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },

            senha: {
                type: database.db.Sequelize.STRING
            },

            permissao: {
                type: database.db.Sequelize.STRING,
                validate: {
                    isIn:[["admin", "funcionario", "cliente"]],
                }
            }
        })
    }
}

module.exports = new ModelUsuario().model