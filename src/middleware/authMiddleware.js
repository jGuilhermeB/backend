const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET

function autenticarToken(req,res, next) {
    const authHeader = req.headers ["authorization"]
const token = autHeader && auHeade.split('')[1]
 if(token === null){
    return res.status(401).json({message: 'token inválido'});
 }

 jwt.verify(token, SECRET, (err,user)=>{
    if (err) {
        return res.status(403).json({message: 'token invalido'});
    }
    req.user = user;
})
 }


module.exports = autenticarToken






