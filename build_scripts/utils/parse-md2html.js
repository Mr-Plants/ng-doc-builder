/**
 * @author weiyb
 * @date 2018/10/1
 * @Description: 将md编译为html片段和meta信息
 */
const marked = require('marked');
const fs = require('fs-extra');
const remark = require('remark')();
const yfm = require('yaml-front-matter');

module.export = function parseMd2Html(file) {
    const meta = yfm.loadFront(file);
    let htmlContent = '';
    const mdObject = remark.parse(meta.__content);
    mdObject.children.forEach(mdChild => {
        htmlContent += marked(remark.stringify(mdChild));
    });

    return {
        meta,
        htmlContent
    }
}
