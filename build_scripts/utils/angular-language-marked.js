/**
 * @author weiyb
 * @date 2018/9/30
 * @Description: 扩展prime支持angular代码高亮，from ant-design
 */

const Prism = require('node-prismjs');
Prism.languages.angular = Prism.languages.extend('typescript', {});

Prism.languages.insertBefore('angular', 'string', {
    'template-string': {
        pattern: /template[\s]*:[\s]*`(?:\\[\s\S]|[^\\`])*`/,
        greedy: true,
        inside: {
            'html': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: Prism.languages.html
            }
        }
    },
    'styles-string': {
        pattern: /styles[\s]*:[\s]*\[[\s]*`(?:\\[\s\S]|[^\\`])*`[\s]*\]/,
        greedy: true,
        inside: {
            'css': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: Prism.languages.css
            }
        }
    }
});

module.exports = Prism;
