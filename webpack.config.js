const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}