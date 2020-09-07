// const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
}