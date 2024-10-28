const database = require('./../config/database')

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
            }
        })
    }
}

module.exports = new ModelCachorro().model