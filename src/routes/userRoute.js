const router = require('express').Router();
const { registrar,login } = require('../controllers/userController.js');

// const authMiddleware= require ('../middleware/authMiddleware.js')
 
// router.use (authMiddleware)

router.post('/register',
    // #swagger.summary = 'registra novo  usuario' 
    // #swagger.description = 'cria novo usuario no sistema com nome, sobrenome, email e senha válidos'    
    registrar, (req, res) => {
        res.send("Rota de cadastro")
    })

router.post('/login', 
    // #swagger.summary = 'registra um novo usuario' 
    // #swagger.descripition = 'autentica user com email e senha'
    // #swagger.responses[200] = {description: 'login efetuado com sucesso'}
    // #swagger.responses[401] = {description:'não autorizado'}
    login) 
    



module.exports = router;