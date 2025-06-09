const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
 
// async function testConnection() {
//   try {
//     await prisma.$connect()
//     console.log('Database connection successful')
//   } catch (error) {
//     console.error('Database connection failed:', error)
//   }finally {
//     await prisma.$disconnect()
//   }
// }

// testConnection()


// async function teste() {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { email: 'teste@teste.com' }
//     });
//     console.log('Usuário encontrado:', user);
//   } catch (error) {
//     console.error('Erro no Prisma:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// teste();


module.exports = prisma