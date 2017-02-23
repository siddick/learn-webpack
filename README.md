Split stylesheet and javascript with WebPack
--------------------------------------------

Please complete [step-02](../../tree/step-02) and follow below steps to intergrate stylesheet.

1. Install node packages

    ```sh
    npm install extract-text-webpack-plugin@beta --save
    ```
2. Create webpack configuration file(`webpack.config.js`)

    ```js
    var HtmlWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
        appCss = new ExtractTextWebpackPlugin('app.css');

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
    ```
4. Start dev server to view application(http://localhost:8080/)

    ```sh
    ./node_modules/.bin/webpack-dev-server --open --inline
    ```
5. Build code for production

    ```sh
    ./node_modules/.bin/webpack -p
    ```

You completed successfully. Continue to next step: [step-04](../../tree/step-04)
