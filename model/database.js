require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mvp",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE IF EXISTS `users`; CREATE TABLE `users` (`userId` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, `firstname` VARCHAR(255), `lastname` VARCHAR(255), `email` VARCHAR(255), `username` VARCHAR(255), `currentlocation` VARCHAR(255)); DROP TABLE IF EXISTS `insights`; CREATE TABLE `insights` (`userId` INTEGER NOT NULL, `title` VARCHAR(255), `category` VARCHAR(255), `description` VARCHAR(255), `ratings` INTEGER NOT NULL, `id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT);";

  con.query(sql, function(err, result) {
    if (err) throw err;

    console.log("Table created");
  });

  sql = 
  "INSERT INTO `users` (firstname, lastname, email, username, currentlocation) VALUES ('Sénamé', 'Agblevon', 'senameagblevon@gmail.com', 'senam86', 'somewhere');"
  sql+= 
  "INSERT INTO `users` (firstname, lastname, email, username, currentlocation) VALUES ('Nanette', 'Taylor', 'nanette.taylor@gmail.com', 'nanette', 'Accra');"

  con.query(sql, function(err, result) {
    if (err) throw err;

    console.log("User added");
  });


  con.end();
});
