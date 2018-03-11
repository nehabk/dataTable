const path = require('path');

module.exports = {
   entry: './src/index.js',
	
   output: {
      filename: "./static/app.js",
      path: path.resolve(__dirname, './static'),
      publicPath: "/",
   },
	
   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            enforce: "pre",
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'env']
            }
         }
      ]
   }
}