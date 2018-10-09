/**
 * @author weiyb
 * @date 2018/10/1
 * @Description: 将md编译为html片段和meta信息
 */
const marked = require('marked');
const remark = require('remark')();
const yfm = require('yaml-front-matter');

module.exports = function parseMd2Html(file) {
    const meta = yfm.loadFront(file);
    let htmlContent = '';
    const content = meta.__content;
    delete meta.__content;   // 减少内存占用
    const contentObject = remark.parse(content);
    contentObject.children.forEach(mdChild => {
        htmlContent += marked(remark.stringify(mdChild));
    });

    return {
        meta,
        htmlContent
    }
};

