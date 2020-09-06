const Stock = require('../model/Stock');


module.exports.getTeste = async (req, res) => {
    // const data = await Stock.find();

    const data = await Stock.find(
        { _id: '5f55113e5ecf292f68032605' }, 
        (err, info) => {
            console.log(err);
        }
    ).exec();

    return res.json(data);
    // res.render('testedb', { title: 'Conexão', rs: data});
};

