const { Sequelize } = require('sequelize')

class DataBase {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'pet_shop',
            host: 'localhost',
            username: 'victor',
            dialect: 'mysql',
            password: 'victor'
        }) 
    }
}

module.exports = new DataBase()