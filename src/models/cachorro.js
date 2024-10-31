const database = require('./../config/database')
const pessoa = require('./pessoa')

class ModelCachorro{
    constructor() {
        this.model = database.db.define('cachorros', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            nome: {
                type: database.db.Sequelize.STRING
            },

            raca: {
                type: database.db.Sequelize.STRING
            },

            peso: {
                type: database.db.Sequelize.DECIMAL
            },

            idPessoa: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: pessoa,
                    key: 'id'
                }
            }
        })

        this.model.belongsTo(pessoa, {
            foreignKey: 'idPessoa'
        })
        pessoa.hasMany(this.model, {
            foreignKey: 'idPessoa'
        })

    }
}

module.exports = new ModelCachorro().model