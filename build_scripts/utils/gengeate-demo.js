/**
 * @author weiyb
 * @date 2018/10/8
 * @Description: 生成demo文件夹和具体文件
 */

const fs = require('fs-extra');
const path = require('path');
const capitalizeFirstLetter = require('./capitalize-first-letter');
const camelCase = require('./camelcase');
const PrismAngular = require('./angular-language-marked');
const Prism = require('node-prismjs');
let demoArr = [];

module.exports = function generateDemo(demoPath, componentsMap) {
  demoArr = [];
  for (const key in componentsMap.demoMap) {
    const currentDemo = componentsMap.demoMap[key];
    currentDemo.demoName = key;
    demoArr.push(currentDemo);
  }
  fs.writeFileSync(path.join(demoPath, 'index.html'), gengerateHtml(componentsMap));
  fs.writeFileSync(path.join(demoPath, 'index.component.ts'), gengerateComponent(componentsMap));
  fs.writeFileSync(path.join(demoPath, 'index.module.ts'), gengrateModule(componentsMap));

};

function gengerateHtml(data) {
  let html = data.head.htmlContent;
  demoArr.sort((pre, next) => pre.meta.order - next.meta.order).forEach(demo => {
    html += `<nz-demo-${data.component}-${demo.demoName}></nz-demo-${data.component}-${demo.demoName}>`;
    const highlightCode = PrismAngular.highlight(demo.ts, Prism.languages['angular']);
    const codeHtml = `<pre class="language-angular"><code class="language-angular">${highlightCode}</code></pre>`;
    html += (demo.htmlContent + codeHtml);
  });
  html += data.api.htmlContent;
  return html.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}

function gengerateComponent(data) {
  let componentTemplate = fs.readFileSync(path.resolve(__dirname, '../template/index.component.template.ts'));
  componentTemplate = String(componentTemplate).replace(/{{componentTag}}/g, data.component).replace(/{{componentName}}/g, componentName(data.component));
  return componentTemplate;
}

function gengrateModule(data) {
  let moduleTemplate = fs.readFileSync(path.resolve(__dirname, '../template/index.module.template.ts'));
  let imports = `import { NzDemo${componentName(data.component)}Component} from './index.component';\n`;
  let declareComponents = [`NzDemo${componentName(data.component)}Component`];
  let entryComponents = [];
  demoArr.forEach(demo => {
    const demoCompentName = `NzDemo${componentName(data.component)}${componentName(demo.demoName)}Component`;
    imports += `import { ${demoCompentName}} from './${demo.demoName}';\n`;
    declareComponents.push(demoCompentName);
    const entries = retrieveEntryComponents(demo.ts);
    entryComponents.push(...entries);
  });
  moduleTemplate = String(moduleTemplate).replace(/{{imports}}/g, imports).replace(/{{component}}/g, componentName(data.component)).replace(/{{declarations}}/g, `${declareComponents.join(',\n\t')},\n`).replace(/{{entryComponents}}/g, entryComponents.join(',\n'));
  return moduleTemplate;
}

// 转换为首字母大写的驼峰
function componentName(component) {
  return camelCase(capitalizeFirstLetter(component));
}

// 匹配entryComponents
function retrieveEntryComponents(plainCode) {
  let matches = (plainCode + '').match(/^\/\*\s*?entryComponents:\s*([^\n]+?)\*\//) || [];
  if (matches[1]) {
    return matches[1].split(',').map(className => className.trim()).filter((value, index, self) => value && self.indexOf(value) === index);
  }
  return [];
}