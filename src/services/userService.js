const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const {criarUsuario, encontrarUsuario }= require('../repositories/userRepository') 

const SECRET = process.env.JWT_SECRET

async function registrarUsuario(firstname, surname, email, password) {

 const usuarioExiste = await encontrarUsuario(email)
 if(usuarioExiste){
    throw new Error('email já cadstrado');
 }
 const senhaCriptografada = await bcrypt.hash(password, 10)
 const user = await criarUsuario ({firstname, surname, email, password: senhaCriptografada})
 return {
    id: user.id,
    firstname: user.firstname,
    surname: user.surname,
    email: user.email
 }
}

async function loginUsuario(email, password) {
    const user = await encontrarUsuario(email)
    if(!user){
        throw new Error('usuario não encontrado');
        
    }
    const senhaValida = await bcrypt.compare (password, user.password)
    if(!senhaValida){
        throw new Error('senha invalida');
        
    }
    const token = jwt.sign ({id: user.id}, SECRET , {expiresIn: '1h'})
    return {token, user: {id: user.id, 
        firstname: user.firstname,
         surname: user.surname,
         email: user.email
        }}
}


module.exports = {
    registrarUsuario,
    loginUsuario
}