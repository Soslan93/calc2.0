const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const EVENT = process.env.npm_lifecycle_event;
const PROD = EVENT.includes('prod');
const DEV = EVENT.includes('dev');

const prodConfig = (function webpackConfig() {
    const config = Object.assign({});
    config.entry = "./src/js/app.js";
    config.output = {
        path: path.resolve(__dirname, "./dist/prod"),
        filename: "main.js",
        publicPath: 'dist/prod'
    };
    config.mode = 'production';
    config.module = {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: {
                            minimize: true,
                            url: false,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader' // compiles SASS to CSS
                    }
                ]
            }
        ]
    }
    config.resolve = {};

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        })
    ]
    config.plugins.push(
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            templateParameters: {
                foo: 'Production mode'
            },
            filename: 'index.html'
        })
    )
    config.plugins.push(
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, 'assets'),
                    to: path.resolve(__dirname, 'dist/assets/')
                },
            ])
    )
    config.plugins.push(
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    )

    return config;
});

const devConfig = (function webpackConfig() {
    const config = Object.assign({});
    config.entry = "./src/js/app.js";
    config.output = {
        path: path.resolve(__dirname, "./dist/dev"),
        filename: "main.js",
        publicPath: 'dist/dev'
    };
    config.mode = 'development';
    config.module = {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', // translates CSS into CommonJS modules
                        }, {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader' // compiles SASS to CSS
                        }]
                })
            }
        ]
    }
    config.resolve = {};

    config.plugins = [
        new ExtractTextPlugin("styles.css")
    ]
    config.plugins.push(
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            templateParameters: {
                foo: 'Development mode'
            },
            filename: 'index.html'
        })
    )
    config.plugins.push(
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, 'assets'),
                    to: path.resolve(__dirname, 'dist/assets/')
                },
            ])
    )
    config.plugins.push(
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    )

    return config;
});

if (PROD) {
    module.exports = prodConfig;
} else if (DEV) {
    module.exports = devConfig;
}