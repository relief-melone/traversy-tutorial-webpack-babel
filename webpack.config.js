const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: ['babel-loader']
            // query: {
                // presets: [
                    // 'env'
                // ]
            // }
        }]
    }
}
