Compile jsx and ES6 syntax
--------------------------

Please complete [step-03](../../tree/step-03) and follow below steps to intergrate stylesheet.

1. Install node packages

    ```sh
    npm install babel-loader babel-core babel-preset-env babel-preset-react --save
    npm install react react-dom --save
    ```
2. Update webpack configuration(`webpack.config.js`) to support babel loader

    ```js
    {
        test: /\.jsx?$/,
        loader: 'babel-loader'
    }
    ```
3. Add babel configuration(`.babelrc`)

    ```json
    {
        "presets": ["env", "react"]
    }
    ```
4. Update javascript file(`app.js`) with Reactjs syntax

    ```js
    var React = require('react'),
        ReactDOM = require('react-dom'),
        container = document.createElement('div');
    
    document.body.appendChild(container);
    
    ReactDOM.render(
        <div className="container">
            <h1>Hello World!</h1>
        </div>,
        container
    );
    ```
5. Start dev server to view application(http://localhost:8080/)

    ```sh
    ./node_modules/.bin/webpack-dev-server --open --inline
    ```
6. Build code for production

    ```sh
    ./node_modules/.bin/webpack -p
    ```

You completed successfully. Continue to next step: [step-05](../../tree/step-05)
