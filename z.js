import { createConnection } from 'mysql2';

const connection = createConnection({
    host: 'localhost',       // or 127.0.0.1
    user: 'root',            // your MySQL user
    password: '1234', // your MySQL password
    database: 'anime_tournament'  // the DB you created in MySQL Workbench
});

connection.connect((err) => {
    if (err) {
        console.error('Connection error: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as ID ' + connection.threadId);
});


let id = 1
connection.query('SELECT * FROM team_a WHERE team_a_id = ' + id, (err, results) => {
    if (err) throw err;
    console.log(results[0]['team_a_name']);
});
