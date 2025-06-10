const router = require('express').Router();
const { registrar,login } = require('../controllers/userController.js');

// const authMiddleware= require ('../middleware/authMiddleware.js')
 
// router.use (authMiddleware)

router.post('/register', registrar)
    

router.post('/login', login) 




module.exports = router;