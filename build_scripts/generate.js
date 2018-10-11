/**
 * @author weiyb
 * @date 2018/9/30
 * @Description: 编译脚本
 */

const fs = require('fs-extra');
const path = require('path');
const nameWithoutSuffix = require('./utils/name-without-suffix');
const parseMd2Html = require('./utils/parse-md2html');
const generateDemo = require('./utils/gengeate-demo');
const generateRoute = require('./utils/generate-route');

const documentPath = path.resolve(__dirname, '../document');
const srcPath = path.resolve(__dirname, '../src');
const appPath = path.join(srcPath, '/app/');

const temporarySrcPath = path.resolve(__dirname, 'src');

const documentDir = fs.readdirSync(documentPath);

fs.removeSync(srcPath);
console.log('拷贝源码模板...');
fs.copySync(temporarySrcPath, path.resolve(__dirname, srcPath));

console.log('开始处理组件...');
const componentsMap = {};
documentDir.forEach(component => {
  console.log('处理' + component + '...');
  const componentDir = path.join(documentPath, component);
  const srcComponentPath = path.join(appPath, component);
  fs.mkdirSync(srcComponentPath);
  const demoPath = path.join(componentDir, 'demo');
  const demoDir = fs.readdirSync(demoPath);
  const demoMap = {};
  demoDir.forEach(file => {
    const nameKey = nameWithoutSuffix(file);
    const demoFile = fs.readFileSync(path.join(demoPath, file));
    if (/.md$/.test(file)) {
      demoMap[nameKey] = parseMd2Html(demoFile);
    } else if (/.ts$/.test(file)) {
      demoMap[nameKey].ts = String(demoFile);
      fs.writeFileSync(path.join(srcComponentPath, file), demoMap[nameKey].ts);
    }
  });
  const apiFile = fs.readFileSync(path.join(componentDir, 'doc/api.md'));
  const headFile = fs.readFileSync(path.join(componentDir, 'doc/head.md'));
  componentsMap[component] = {
    component,
    api: parseMd2Html(apiFile),
    head: parseMd2Html(headFile),
    demoMap
  };
  generateDemo(srcComponentPath, componentsMap[component]);
});

generateRoute(componentsMap);