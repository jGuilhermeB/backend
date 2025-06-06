const {  criarCarrinho, listarItens, limparCarrinho} = require('../controllers/cartController');
const router = require('express').Router();

//listar carrinho itens
router.get('/:id',listarItens)

//cria carrinho
router.post('/', criarCarrinho)

//Deleta todos os itens do carrinho
router.delete('/:id', limparCarrinho)

module.exports = router;