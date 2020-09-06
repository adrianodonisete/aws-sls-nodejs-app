// const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// mongodb+srv://userdb:password@clusterexample.ntlsu.mongodb.net/test

// const db = mongoose.connect(
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${DB_HOST}`, 
//     {useNewUrlParser: true}
// );
// module.exports.db;

// console.log(process.env);

module.exports = {
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
}