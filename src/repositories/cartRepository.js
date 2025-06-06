const prisma = require("../config/prisma.js");


async function cartCheck(cart_id) {
    return await prisma.cart.findUnique({
        where: {id: cart_id},
        select: {id: true}
    })
}

async function listarCarrinhoItensRepository(params) {
    return prisma.cartItem.findMany({
        where: {cart_id: params.id},

    })
}

async function criarCarrinhoRepository(user_id) {
    return await prisma.cart.create({
        data: {user_id}
    })
}
async function limparCarrinhoRepository(id) {
    return await prisma.cartItem.delete({    
        where: {id: Number(cart_id)}   
    })
}

module.exports = {
    cartCheck,
    listarCarrinhoItensRepository,
    criarCarrinhoRepository,
    limparCarrinhoRepository
}