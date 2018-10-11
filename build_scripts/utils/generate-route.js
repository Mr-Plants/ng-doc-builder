/**
 * @author weiyb
 * @date 2018/10/11
 * @Description: 编译路由
 */
const fs = require('fs-extra');
const path = require('path');
const capitalizeFirstLetter = require('./capitalize-first-letter');
const camelCase = require('./camelcase');

module.exports = function generateRoute(data) {
  const components = [];
  let routes = '';
  for (const key in data) {
    components.push({
      path: `components/${key}`,
      label: `${key} ${data[key].head.meta.chinese}`
    });
    routes += `{'path': 'components/${key}', 'loadChildren': './${key}/index.module#NzDemo${componentName(key)}Module'},\n`;
  }

  let routeTemplate = fs.readFileSync(path.resolve(__dirname, '../template/router.template.ts'));
  routeTemplate = String(routeTemplate).replace(/{{components}}/g, JSON.stringify(components, null, 2)).replace(/{{routes}}/g, routes);
  fs.writeFileSync(path.resolve(__dirname, '../../src/app/router.ts'), routeTemplate);
};

// 转换为首字母大写的驼峰
function componentName(component) {
  return camelCase(capitalizeFirstLetter(component));
}