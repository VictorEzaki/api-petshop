const database = require('./../config/database')
const usuario = require('./usuario')

class ModelFuncionario{
    constructor() {
        this.model = database.db.define('funcionarios', {
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

            cargo: {
                type: database.db.Sequelize.STRING
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

module.exports = new ModelFuncionario().model