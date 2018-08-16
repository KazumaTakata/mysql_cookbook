var mysql = require("mysql");

var con = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
