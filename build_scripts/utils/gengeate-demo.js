/**
 * @author weiyb
 * @date 2018/10/8
 * @Description: 生成demo文件夹和具体文件
 */

const fs = require('fs-extra');
const path = require('path');

module.exports = function generateDemo(demoPath, componentsMap) {
    fs.writeFileSync(path.join(demoPath, 'index.html'), gengerateHtml(componentsMap));
};

/**
 *拼接头尾，对demomap排序插入
 */
function gengerateHtml(data) {
    let html = '';
    const demoArr = [];
    html += data.head.htmlContent;
    for (const key in data.demoMap) {
        demoArr.push(data.demoMap[key]);
    }
    demoArr.sort((pre, next) => pre.meta.order - next.meta.order).forEach(demo => {
        html += (demo.htmlContent + demo.highlightCode);
    });
    html += data.api.htmlContent;
    return html;
}

function gengerateComponent(data) {

}