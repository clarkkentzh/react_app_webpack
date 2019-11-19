const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.json']
    },
    devServer: {
        // 根目录下dist为基本目录
        contentBase: path.join(__dirname, 'dist'),
        // 自动压缩代码
        compress: true,
        // 服务端口为1208
        port: 8090,
        // 自动打开浏览器
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'clark',
            filename: 'index.html',
            template: 'src/index.html',
            favicon: './favicon.ico',
        }),
        new EncodingPlugin({
            encoding: 'iso-8859-1'
        }),
        new webpack.IgnorePlugin(/(locale)/, /moment$/),
        new webpack.ContextReplacementPlugin(/^\.\/locale$/, context => {
            if (!/\/moment\//.test(context.context)) { return }
            Object.assign(context, {
              regExp: /^\.\/(ja|ko|zh)/,
              request: '../../locale'
            })
        })
    ]
}