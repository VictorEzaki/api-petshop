const database = require('../config/database')
const usuario = require('./usuario')

class ModelPessoa {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            nome: {
                type: database.db.Sequelize.STRING
            },

            dtNasc: {
                type: database.db.Sequelize.DATE
            },

            telefone: {
                type: database.db.Sequelize.STRING,
                unique: true
            },

            idUsuario: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: usuario,
                    key: 'id'
                }
            }
        })

        this.model.belongsTo(usuario, {
            foreignKey: 'idUsuario'
        })
    }
}

module.exports = new ModelPessoa().model