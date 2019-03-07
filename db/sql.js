module.exports = () => {
  
  var mysql      = require('mysql');

  
  var con = mysql.createConnection(
    { 
      host: process.env.MYSQL_HOST || "localhost", 
      user: process.env.MYSQL_USER || "me", 
      password: process.env.MYSQL_PASSWORD || "secret" , 
      database: process.env.MYSQL_DATABASE || "my-db"
    });


    con.connect(function(err){
      if(err){
        console.log('Error connecting to db: ', err);
        return;
      }
      console.log('Connection to db established');
      con.query('CREATE TABLE IF NOT EXISTS visits (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, ts BIGINT)',function(err) {
        if(err) throw err;
      });
    });
    
  
  return con;

}


