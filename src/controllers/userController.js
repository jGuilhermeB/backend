const {registrarUsuario, loginUsuario} = require('../services/userService')

async function registrar(req, res) {
    const { firstname, surname, email, password } = req.body;
    try {
        const user = await registrarUsuario(firstname, surname, email, password);
        res.status(201).json({ message: 'Usuário registrado com sucesso', user });
    } catch (error) {
        res.status(400).json({
            error: error.message
        })

    }
}
async function login(req, res) {
    const { email, password } = req.body;
    console.log(email, password)
    try {
        const result = await loginUsuario(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({
            error: error.message
        })
    }
}


module.exports = { registrar, login };