/**
 * @author weiyb
 * @date 2018/9/30
 * @Description: 编译脚本
 */

const fs = require('fs-extra');
const PrismAngular = require('./utils/angular-language-marked');
const Prism = require('node-prismjs');
const path = require('path');
const nameWithoutSuffix = require('./utils/name-without-suffix');
const parseMd2Html = require('./utils/parse-md2html');

const documentPath = path.resolve(__dirname, '../document');

const temporarySrc = path.resolve(__dirname, '/src');

const documentDir = fs.readdirSync(documentPath);
documentDir.forEach(component => {
    const componentDir = path.join(documentPath, component);
    const demoDir = fs.readdirSync(path.join(componentDir, 'demo'));
    const demoMap = {};
    demoDir.forEach(file => {
        const nameKey = nameWithoutSuffix(file);
        const demoFile = readFileSync(path.resolve(__dirname, file));
        if (/.md$/.test(file)) {
            demoMap[nameKey] = parseMd2Html(demoFile);
        } else if (/.ts$/.test(file)) {
            const highlightCode = PrismAngular.highlight(demoFile, Prism.languages['angular']);
            demoMap[nameKey].highlightCode = `<pre class="language-angular"><code class="language-angular">${highlightCode}</code></pre>`
        }
    })
});
// fs.removeSync('../src');
// fs.copySync()