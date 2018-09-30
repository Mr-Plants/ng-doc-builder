/**
 * @author weiyb
 * @date 2018/9/30
 * @Description: 编译脚本
 */
const marked = require('marked');
const fs = require('fs-extra');
const remark = require('remark')();
const yfm = require('yaml-front-matter');
const PrismAngular = require('./utils/angular-language-marked');
const Prism = require('node-prismjs');
const path = require('path');

const documentDir = path.resolve(__dirname, '../document');