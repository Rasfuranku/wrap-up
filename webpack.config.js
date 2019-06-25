const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.tsx$/, exclude: /node_modules/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000,
        liveReload: true,
        open: true
    }
};