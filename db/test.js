require('babel-polyfill');
var studentDB = require('./studentDB');
var Student = require('../model/student');
//查询所有
/*
studentDB.findAllStudent().then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了");
});
*/
//修改 
/*
var student = new Student(15,'完','男','1996-05-07',null);
studentDB.updateById(student).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了");
});
*/

//添加
/*
var  student = new Student(null,'王二','男','1994-01-02',null);
studentDB.addStudent(student).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了",error)
});
*/
//删除
/*
var ids = [30,34];
studentDB. deleteById(ids).then(function(data){
  console.log(data);
}).catch(function(error){
  conole.log('报错');
});
*/
//查询通过id
/*
studentDB.findById(17).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错");
})
*/
//查询通过关键字(有问题)
/*
studentDB.query('男').then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错");
})
*/






