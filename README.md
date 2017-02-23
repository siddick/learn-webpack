Steps to create simple webpack project
--------------------------------------

Create empty project directory and follow below steps.

1. Install node packages

	```sh
	npm init --yes
	npm install webpack webpack-dev-server html-webpack-plugin --save
	npm install jquery --save
	```
2. Create javascript file(`app.js`)

	```js
	var $ = require('jquery');
	$('body').append('<h1>Hello World!</h1>');
	```
3. Create webpack configuration file(`webpack.config.js`)

	```js
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
	```
4. Start dev server to view application(http://localhost:8080/)

	```sh
	./node_modules/.bin/webpack-dev-server --open --inline
	```
5. Build code for production

	```sh
	./node_modules/.bin/webpack -p
	```

You are completed successfully. Continue to next step: [step-02](../../tree/step-02)
