var express = require('express');
var router = express.Router();


const priceController = require('../controllers/priceController');


http://localhost:3000/price/?stock=wege3
router.get('/', priceController.getPrice);

http://localhost:3000/price/stock/wege3
router.get('/stock/:stock', priceController.getPrice);

http://localhost:3000/price/stocks
router.get('/stocks', priceController.listStocks);


router.get('/teste', function(req, res, next) {
    res.render('teste', { title: 'Cotações B3', content: 'teste 22'});
});
  
module.exports = router;