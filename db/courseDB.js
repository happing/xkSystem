var pool = require('./pool');

function findAllCourse(handler){
  pool.getConnection(function(err,connection){
    if(err){
      throw err;
    }else{
      var sql = 'select * from xk_course';
      connection.query(sql,function(err,results){
        if(err){
          throw err;
        }else{
          handler.call(this,results);   
        }
        connection.release();
      })
    }
  });
}
module.exports = {
  findAllCourse:findAllCourse,
}