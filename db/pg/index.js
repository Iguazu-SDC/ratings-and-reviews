const { Client } = require("pg");
const client = new Client({
  user: 'yazuki',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432,
});
client.connect();


module.exports.client = client;
