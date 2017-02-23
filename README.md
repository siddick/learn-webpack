Compile stylesheet with WebPack
-------------------------------

Please complete [step-01](../../tree/step-01) and follow below steps to intergrate stylesheet.

1. Install node packages

    ```sh
    npm install style-loader css-loader url-loader file-loader --save
    npm install sass-loader node-sass --save
    npm install bootstrap --save
    ```
2. Create stylesheet file(`app.scss`)

    ```css
    @import "~bootstrap/dist/css/bootstrap.css";
    ```
3. Create webpack configuration file(`webpack.config.js`)

    ```js
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
    ```
4. Start dev server to view application(http://localhost:8080/)

    ```sh
    ./node_modules/.bin/webpack-dev-server --open --inline
    ```
5. Build code for production

    ```sh
    ./node_modules/.bin/webpack -p
    ```

You completed successfully. Continue to next step: [step-03](../../tree/step-03)
