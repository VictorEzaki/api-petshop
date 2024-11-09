const jwt = require('jsonwebtoken')

function auth(roles = []) {
    return (req, res, next) => {
        const token = req.headers['authorization']

        if (!token) {
            return res.status(400).send({ msg: "Token não informado ou sem permissão" })
        }

        jwt.verify(token, 'segredo', async (err, decoded) => {
            try {
                if (err) {
                    console.error('Erro ao decodificar', err)
                    return res.status(400).send({ msg: "Token não informado ou sem permissão" })
                }

                const usuarioLogado = await user.findUser(decoded.id)

                if(!usuarioLogado) {
                    return res.status(404).json({ msg: "Usuário não encontrado" })
                }
                if (roles.length && !roles.includes(usuarioLogado.permissao)) {
                    return res.status(403).json({ msg: "Sem permissão" })
                }

                req.session = decoded
                next()
            } catch (e) {
                return res.status(404).json({ msg: "Usuário não encontrado" })
            }
        })

    }
}

module.exports = auth