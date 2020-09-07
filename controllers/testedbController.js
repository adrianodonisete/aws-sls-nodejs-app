const Stock = require('../models/Stock');
const { ERROR_INTERNAL, ERROR_NOT_FOUND } = require('../config/errors');


exports.addTimestamps = async (req, res) => {
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

exports.allHtml = async (req, res) => {
    await Stock.find(
        (err, data) => {
            let objError;

            if (err) {
                objError = ERROR_INTERNAL;
            }

            if (!data || data.length == 0) {
                objError = ERROR_NOT_FOUND;
            }

            res.render('testedb', { title: 'Conexão', rs: data, error: objError });
        }).exec();
};

exports.all = async (req, res) => {
    await Stock.find( 
        (err, data) => solveResult(res, err, data)
    ).exec();
};

exports.one = async (req, res) => {
    const identity = req.params.identity;
    await Stock.findOne(
        { identy: identity }, 
        (err, data) => solveResult(res, err, data)
    );
};


exports.oneById = async (req, res) => {
    const _id = req.params._id;
    await Stock.findById(
        _id, 
        (err, data) => solveResult(res, err, data)
    ).exec();
};


const solveResult = (res, err, data) => {
    if (err) {
        return res.status(500).json(ERROR_INTERNAL);
    }

    if (!data || data.length == 0) {
        return res.status(404).json(ERROR_NOT_FOUND);
    }

    return res.status(200).json(data);
}




/*
{"_id":{"$oid":"5f55113e5ecf292f680325f5"},"classification":"GB","objective":0.03,"type":"acao","code":"B3SA3","identy":"acao01"} 

*/