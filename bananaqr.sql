/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50016
Source Host           : localhost:3308
Source Database       : bananaqr

Target Server Type    : MYSQL
Target Server Version : 50016
File Encoding         : 65001

Date: 2017-04-08 11:48:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `image`
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int(11) NOT NULL auto_increment,
  `imgName` varchar(100) default NULL,
  `imgSrc` varchar(500) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of image
-- ----------------------------
