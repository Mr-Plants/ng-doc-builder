/**
 * @author weiyb
 * @date 2018/10/8
 * @Description: 生成demo文件夹和具体文件
 */

const fs = require('fs-extra');
const path = require('path');
const capitalizeFirstLetter = require('./capitalize-first-letter');
const camelCase = require('./camelcase');
const demoArr = [];

module.exports = function generateDemo(demoPath, componentsMap) {
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
    let html = '';
    html += data.head.htmlContent;
    demoArr.sort((pre, next) => pre.meta.order - next.meta.order).forEach(demo => {
        html += `<nz-demo-${data.component}-${demo.demoName}></nz-demo-${data.component}-${demo.demoName}>`;
        html += (demo.htmlContent + demo.highlightCode);
    });
    html += data.api.htmlContent;
    return html;
}

function gengerateComponent(data) {
    let componentTemplate = fs.readFileSync(path.resolve(__dirname, '../template/index.component.ts'));
    componentTemplate = String(componentTemplate).replace(/{{componentTag}}/g, data.component).replace(/{{componentName}}/g, componentName(data.component));
    return componentTemplate;
}

function gengrateModule(data) {
    let moduleTemplate = fs.readFileSync(path.resolve(__dirname, '../template/index.module.ts'));
    let imports = `import { NzDemo${componentName(data.component)}Component} from './index.component';\n`;
    let declareComponents = [`NzDemo${componentName(data.component)}Component`];
    demoArr.forEach(demo => {
        const demoCompentName = `NzDemo${componentName(data.component)}${componentName(demo.demoName)}Component`;
        imports += `import { ${demoCompentName}} from './${demo.demoName}';\n`;
        declareComponents.push(demoCompentName);
    });
    moduleTemplate = String(moduleTemplate).replace(/{{imports}}/g, imports).replace(/{{component}}/g, componentName(data.component)).replace(/{{declarations}}/g, `\t\t${declareComponents.join(',\n\t')},\n`);
    return moduleTemplate;
}

function componentName(component) {
    return camelCase(capitalizeFirstLetter(component));
}
