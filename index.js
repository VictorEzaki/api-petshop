const express = require('express')
const database = require('./src/config/database')
const routerCachorro = require('./src/routes/cachorro')
const routerCliente = require('./src/routes/cliente')
const routerFuncionario = require('./src/routes/funcionario')
const userRoute = require('./src/routes/usuario')
// const auth = require('./src/middleware/auth')

const app = express()
app.use(express.json())
app.use('cachorro', routerCachorro)
app.use(routerCliente, routerFuncionario)
app.use(userRoute)

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