const database = require('./../config/database')

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

module.exports = new ModelFuncionario().model