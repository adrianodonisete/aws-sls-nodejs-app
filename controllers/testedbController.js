const Stock = require('../models/Stock');
const { ERROR_INTERNAL, ERROR_NOT_FOUND } = require('../config/errors');


module.exports.addTimestamps = async (req, res) => {
    await Stock.updateMany({}, 
        { 
            $set: {
                createdAt: { type: Date, default: "2020-09-06T03:38:06.384Z" }
            }
            // $rename: { "updated_at" : "created_at" }
        }, { multi: true }, 
        function(err, data) {
            if (!err) { 
                console.log(data);
            }
        }
    );
    // console.log(1, res);

    return res.status(200).json({ok: 'rodou 22'});
};



module.exports.getAll = async (req, res) => {
    const data = await Stock.find( 
        (err, stocks) => {
            if (err) {
                return res.status(500).json(ERROR_INTERNAL);
            }

            if (!stocks || stocks.length == 0) {
                return res.status(404).json(ERROR_NOT_FOUND);
            }

            return res.status(200).json(stocks);
        }).exec();
    // res.render('testedb', { title: 'Conexão', rs: data});
};

module.exports.getOne = async (req, res) => {
    const identity = req.params.identity;
    await Stock.findOne(
        { identy: identity }, 
        (err, stock) => {
            if (err) {
                return res.status(500).json(ERROR_INTERNAL);
            }

            if (!stock || stock.length == 0) {
                return res.status(404).json(ERROR_NOT_FOUND);
            }

            return res.status(200).json(stock);
        }
    );
};




/*
{"_id":{"$oid":"5f55113e5ecf292f680325f5"},"classification":"GB","objective":0.03,"type":"acao","code":"B3SA3","identy":"acao01"} 

*/