
const express = require('express');
const cartRoute = require('./src/routes/cartRoute.js')
const cartItemRoute = require('./src/routes/cartItemRoute.js')
const userRoute = require ('./src/routes/userRoute.js')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
require('dotenv').config()


const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
   // #swagger.tags = ['documentacao']
   // #swagger.summary = 'redireciona para documentaão API'
   res.redirect('/docs')
})

app.get('/', (req, res) => {
   res.send('Seja bem-vindo') 
})

app.use('/v1/cart',
   // #swagger.tags = ['carrinho']
    cartRoute)
app.use('/v1/item',
   // #swagger.tags = ['carrinho-item']
   cartItemRoute)
app.use('/v1/user', 
   // #swagger.tags = ['usuario']
   userRoute)

app.listen(port, () => {
    console.log(`API documentation:http://localhost:${port}/docs  `)
})
