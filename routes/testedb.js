const express = require('express');
const router = express.Router();


const testedbController = require('../controllers/testedbController');


http://localhost:3000/db/teste
router.get('/teste', testedbController.getTeste);


router.get('/teste2', function(req, res, next) {
    res.render('teste', { title: 'Cotações B3', content: 'teste 22'});
});
  
module.exports = router;