const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')
const authMiddleware= require ('../middleware/authMiddleware.js')
 
router.use (authMiddleware)



// #swagger.summary = 'Insere itens no carrinho'
router.post('/', inserirItens)

// #swagger.summary = 'altera a quantidade de itens no carrinho'
router.put('/:id', alterarItens) 

// #swagger.summary = 'altera a quantidade de itens no carrinho'
router.delete('/:id', deletarItens) 


module.exports = router