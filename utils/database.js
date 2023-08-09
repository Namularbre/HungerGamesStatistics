const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    connectionLimit: 5
});

module.exports = pool;
