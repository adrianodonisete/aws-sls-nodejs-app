const express = require('express');
const router = express.Router();


const testedbController = require('../controllers/testedbController');


http://localhost:3000/db/addtime
router.get('/addtime', testedbController.addTimestamps);

http://localhost:3000/db/all
router.get('/all', testedbController.getAll);

http://localhost:3000/db/one/acao05
router.get('/one/:identity', testedbController.getOne);


router.get('/teste2', function(req, res, next) {
    res.render('teste', { title: 'Cotações B3', content: 'teste 22'});
    //https://www.npmjs.com/package/mongoose-scaffold-crud
});
  
module.exports = router;