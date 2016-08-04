/*
Navicat MySQL Data Transfer

Source Server         : mydb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2016-08-04 15:05:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('hesy');
INSERT INTO `test` VALUES ('bjp');

-- ----------------------------
-- Table structure for `userinfos`
-- ----------------------------
DROP TABLE IF EXISTS `userinfos`;
CREATE TABLE `userinfos` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `loginname` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `realname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfos
-- ----------------------------
INSERT INTO `userinfos` VALUES ('1', 'heshy', 'heshy', null, null, null, null);
INSERT INTO `userinfos` VALUES ('30', '333', '333', null, null, null, null);
INSERT INTO `userinfos` VALUES ('31', '111', '111', null, null, null, null);
INSERT INTO `userinfos` VALUES ('32', 'hl', '123', 'hl@qq.com', '60', 'hlcost', '广东华联软件科技');
INSERT INTO `userinfos` VALUES ('33', '222', '222', null, null, null, null);
INSERT INTO `userinfos` VALUES ('34', 'hesy', '123456', 'heshiyun@vip.qq.com', '24', '退回起点、', '世运');
INSERT INTO `userinfos` VALUES ('35', 'cost168', '1236666697989we', null, null, null, null);
INSERT INTO `userinfos` VALUES ('40', '123456', '123445', null, null, null, null);
