var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        path: (__dirname + '/public'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

