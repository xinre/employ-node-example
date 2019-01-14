var database = require('./databaseindex.js')
exports.get_click = function(req, res) {
    return res.jsonp({"hello":"world"});
  };
exports.getmysqldata = function(req,res){
    let mysqldata = {
        databases:"mysql",
        datalist:{},
    };
    let sql = "select * from employees";
    let connection = database.getConnect();
    connection.query(sql,function(err,rows,fields){
        for(let i=0;i<rows.length;i++){
            mysqldata.datalist[i]={
                name:rows[i].firstname,
                phone:rows[i].phone,
                data:rows[i].brithdate,
            }
        }
        return res.jsonp(mysqldata);
    });
    // connection.end(function(err){
    //     console.log('23156');
    //     if(err){
    //         console.log(err)
    //         return
    //     }
    // })
}