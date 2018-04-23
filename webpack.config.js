var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    appCss = new ExtractTextWebpackPlugin('app.css');

module.exports = {
    entry: {
        app: ['./src/css/app.scss', './src/js/app.js']
    },
    output: {
        path: (__dirname + '/public'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                loader: appCss.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(svg|ttf|eot|woff2?)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        appCss
    ]
};
