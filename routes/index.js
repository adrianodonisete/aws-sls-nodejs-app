var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  res.status(200).json(['no content']);
});

router.get('/as', async (req, res, next) => {
  res.status(200).json(['Hello World!']);
});

router.get('/prod', async (req, res, next) => {
  const product = [1,2,3,4, 'Hello World!'];
  res.status(201).json(product);
});

module.exports = router;