/*
Navicat MySQL Data Transfer

Source Server         : windows
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : web1701

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2017-11-08 12:52:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for xk_clazz
-- ----------------------------
DROP TABLE IF EXISTS `xk_clazz`;
CREATE TABLE `xk_clazz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xk_clazz
-- ----------------------------
INSERT INTO `xk_clazz` VALUES ('1', 'web1703');
INSERT INTO `xk_clazz` VALUES ('2', 'web1703');
INSERT INTO `xk_clazz` VALUES ('3', 'web1703');
INSERT INTO `xk_clazz` VALUES ('4', 'web1704');
INSERT INTO `xk_clazz` VALUES ('5', 'web1705');
INSERT INTO `xk_clazz` VALUES ('6', 'web1706');
INSERT INTO `xk_clazz` VALUES ('7', 'web1707');
INSERT INTO `xk_clazz` VALUES ('8', 'web1709');

-- ----------------------------
-- Table structure for xk_course
-- ----------------------------
DROP TABLE IF EXISTS `xk_course`;
CREATE TABLE `xk_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `credit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xk_course
-- ----------------------------
INSERT INTO `xk_course` VALUES ('1', 'js', '2');
INSERT INTO `xk_course` VALUES ('2', 'css', '3');
INSERT INTO `xk_course` VALUES ('3', 'html', '2');
INSERT INTO `xk_course` VALUES ('4', 'java', '4');
INSERT INTO `xk_course` VALUES ('5', 'unix', '2');

-- ----------------------------
-- Table structure for xk_student
-- ----------------------------
DROP TABLE IF EXISTS `xk_student`;
CREATE TABLE `xk_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fx1003_idx` (`class_id`),
  CONSTRAINT `fx1003` FOREIGN KEY (`class_id`) REFERENCES `xk_clazz` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xk_student
-- ----------------------------
INSERT INTO `xk_student` VALUES ('15', '貂蝉', '男', '1997-06-01', null);
INSERT INTO `xk_student` VALUES ('24', '诸葛', '男', '1997-03-01', null);
INSERT INTO `xk_student` VALUES ('25', '孔明', '男', '1997-03-01', null);
INSERT INTO `xk_student` VALUES ('26', '张飞', '男', '1997-03-01', null);
INSERT INTO `xk_student` VALUES ('27', '刘备', '男', '1997-03-01', null);
INSERT INTO `xk_student` VALUES ('29', '刘备', '男', '1997-03-01', null);
INSERT INTO `xk_student` VALUES ('30', '马超', '男', '1997-02-28', null);

-- ----------------------------
-- Table structure for xk_studentcourse
-- ----------------------------
DROP TABLE IF EXISTS `xk_studentcourse`;
CREATE TABLE `xk_studentcourse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(45) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `course` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fx1001_idx` (`student_id`),
  KEY `fx1002_idx` (`course`),
  CONSTRAINT `fx1001` FOREIGN KEY (`student_id`) REFERENCES `xk_student` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fx1002` FOREIGN KEY (`course`) REFERENCES `xk_course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xk_studentcourse
-- ----------------------------
