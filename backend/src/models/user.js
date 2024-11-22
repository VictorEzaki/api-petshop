const database = require('./../config/database')
const roles = require('./role')

class User {
    constructor() {
        this.model = database.db.define('users', {
            idUser: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: database.db.Sequelize.STRING
            },

            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },

            password: {
                type: database.db.Sequelize.STRING
            },

            phone: {
                type: database.db.Sequelize.BIGINT,
                unique: true
            },

            idRole: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: roles,
                    key: 'idRole'
                }
            }
        })

        this.model.belongsTo(roles, {
            foreignKey: 'idRole'
        })

        roles.hasMany(this.model, {
            foreignKey: 'idRole'
        })
    }
}

module.exports = new User().model