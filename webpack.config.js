var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: ['./app.scss', './app.js']
    },
    output: {
        path: (__dirname + '/public'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(svg|ttf|eot|woff2?)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
