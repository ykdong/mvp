const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "mvp",
  password: "1",
  port: 5432,
};

const pool = new Pool(credentials);

pool.connect();
// DROP TABLE IF EXISTS userinfo
pool.query(`select NOW()`, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    pool.query(
      `CREATE TABLE IF NOT EXISTS userinfo
               (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name VARCHAR(50),
                password VARCHAR(255),
                cash decimal(10,2),
                total decimal(10,2) 
                )`,
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          pool.query(`DROP TABLE IF EXISTS history`, (err, res) => {
            if (err) {
              console.log(err);
            } else {
              pool.query(
                `CREATE TABLE IF NOT EXISTS history
                                        (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                        username text,
                                        symbol text,
                                        companyname text,
                                        shares integer,
                                        price decimal(10,2),
                                        rowtotal decimal(10,2),
                                        action text 
                                        );`,
                (err, res) => { if (err) { console.log(err); } }
              );
            }
          });
        }
      }
    );
  }
});

module.exports = pool;
