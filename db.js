const { Pool } = require("pg")

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.HOST,
  database: process.env.NAME,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
})

// Requête pour créer une table users
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
  )
`

// Connexion à la base de données
pool.connect((err, client, done) => {
  if (err) throw err;

  // Créer la table users
  client.query(createTableQuery, (err, res) => {
    done();
    if (err) throw err;

    console.log('Table users created');
  });
});


module.exports = pool

