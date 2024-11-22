const database = require('../config/database')

class Roles {
    constructor() {
        this.model = database.db.define('roles', {
            idRole: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            nameRole: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = new Roles().model