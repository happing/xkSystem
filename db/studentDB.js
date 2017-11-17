var pool =require('./pool');
module.exports = {
  //关键字查询
  query(keys){
    var sql = "select * from xk_student where name like '%"+keys+"%'or gender like '%"+keys+"%'";
    return pool.execute(sql);
  },
  //通过id查询
  findById(id){
    var sql = 'select * from xk_student where id ='+id;
    return pool.execute(sql);
  },
  //查询所有
  findAllStudent(){
    var sql = 'select * from xk_student';
    return pool.execute(sql);
  },
  //通过id选择删除
  deleteById(ids){
    var sql = "delete from xk_student where id in ("+ids.join()+")";
    return pool.execute(sql);
  },
  //添加
  addStudent(student){
    var sql = "insert into xk_student values(null,'"+student.name+"','"+student.gender+"','"+student.birth+"',"+student.class_id+")";
    return pool.execute(sql);
  },
  //修改
  updateById(student){
    var sql = "update xk_student set name = '"+student.name+"',gender = '"+student.gender+"',birth = '"+student.birth+"',class_id = "+student.class_id+" where id = "+student.id;
    return pool.execute(sql);
  }
}
