var mysql = require('mysql');

module.exports.getConnect = function(){
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port:3306,
        database:'company',
        user:'root',
        password:'tanghongyu',
        charset:'utf8'
    });
    connection.connect(function(err){
        if (err) {
            console.log("SQL CONNECT ERROR: ", err);
        } else {
            console.log("SQL CONNECT SUCCESSFUL.");
        }
    });
    connection.on("close", function(err) {
        console.log("SQL CONNECTION CLOSED.");
    });
    connection.on("error", function(err) {
            console.log("SQL CONNECTION ERROR: ." + err);
    });
    module.exports.connection=connection;
    return module.exports.connection;
}
module.exports.getConnect();