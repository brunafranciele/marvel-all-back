const mysql = require('mysql2/promise');
require('dotenv').config();

const config = {
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b9f50d46b81772',
  password: '2e2ae3e5',
  database: 'heroku_0250d96296c0c45',
};

const connection = mysql.createPool(config);
module.exports = connection