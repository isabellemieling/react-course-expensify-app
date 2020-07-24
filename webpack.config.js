const path = require('path');

// entry point --> where does our application kick off?
// app.js inside of src/ folder

module.exports = {
    entry: './src/app.js',
    // entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, 
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// When webpack reads a css file, it will dump the file into a css style tag 