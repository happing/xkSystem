//使用的框架
let express = require('express');
//定义框架路由
let router = express.Router();
//引入后台文件需要
let studentDB = require('../db/studentDB');
//引入创建的对象包含所有属性
let Student = require('../model/student');
//查询所有
//request,responce 开始  结束
router.get('/findAllStudent',(req,resp)=>{
  studentDB.findAllStudent().then((data)=>{
    //结束之后发送后台拿到的值给前端服务器
    resp.send(data);    
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
router.get('/findById',(req,resp)=>{
  studentDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  }) 
});
//模糊查询
router.get('/query/:keys',(req,resp)=>{
  studentDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//增加
router.post('/addStudent',(req,resp)=>{
  let student =new Student();
  //覆盖没有值的student对象
  //req开始 前台页面接受到的数据传给后台
  Object.assign(student,req.body);
  studentDB.addStudent(student).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  })
});
//修改
router.post('/updateById',(req,resp)=>{
  let student = new Student();
  Object.assign(student,req.body);
  studentDB.updateById(student).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//删除
router.post('/deleteById',(req,resp)=>{
  studentDB.deleteById(req.body).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = router;