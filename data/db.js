// all'interno dei file impostiamo le configurazioni di mySQL

const mysql = require('mysq12');


const connection = mysql. createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'posts_db'
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MysQL!');
});


module.exports = connection;