var path = require('path');
var bowerPackage = require('../bower.json');
var rootPath = path.resolve(path.join(__dirname, '..'));

module.exports = {
    server: {
        host: 'localhost',
        port: 8000
    },
    paths: {
        root: rootPath,
        src: [
            path.join(rootPath, 'src', bowerPackage.name + '.module.js'),
            path.join(rootPath, 'src', '**', '*.js'),
        ],
        tpl: path.join(rootPath, 'src', '**', '*.html'),
        less: path.join(rootPath, 'src', 'less', '*.less'),
        outputFolder: path.join(rootPath, 'dist'),
        tplOutputFolder: path.join(rootPath, 'src/jsonViewer'),
        outputFilename: bowerPackage.name + '.js',
        demoFolder: path.join(rootPath, 'demo'),
        test: [
            path.join(rootPath, 'test', 'unit', '**', '*.js')
        ]
    }
};
