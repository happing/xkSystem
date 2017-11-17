var pool = require('./pool');
//查询所有
function findAllClass(handler){
  pool.getConnection(function(err,connection){
    if(err){
      throw err;
    }else{
      var sql = 'select * from xk_clazz';
      //console.log(sql);
      connection.query(sql,function(err,results){
        if(err){
          throw err;
        }else{
          handler.call(this,results);
        }
        connection.release();
      });
    }
  });
}

module.exports = {
  findAllClass:findAllClass
}