const express = require('express')
const database = require('./src/config/database')
const cors = require('cors')

const routerUser = require('./src/routes/user')
const routerRole = require('./src/routes/role')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/user', routerUser)
app.use('/api/role', routerRole)


const PORT = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info('Banco conectado com sucesso!')
        app.listen(PORT, () => {
            console.info(`Servidor está rodando na porta ${PORT}.`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou ${e}`)
    })