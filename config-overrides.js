const {
    override,
    addBabelPlugin
} = require('customize-cra');

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: '~',
        rootPathSuffix: 'src'
    }
];

module.exports = override(addBabelPlugin(rootImportConfig));