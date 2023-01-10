const path = require('path');

module.exports = {
    mode: 'production',

    entry: {
        app: path.resolve(__dirname, 'js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'), 
        filename: '[name][contenthash].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3000, 
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
}