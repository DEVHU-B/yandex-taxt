const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },

  mode: 'development',

  devtool: 'source-map',

  devServer: {
    static: './dist',
    port: 3200,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

    module: {
        rules: [
        // JavaScript и JSX
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    configFile: false,
                    presets: [
                        '@babel/preset-env',
                        [
                            '@babel/preset-react',
                            { runtime: 'automatic' },
                        ],
                    ],
                },
            },
        },

        // CSS Modules: App.module.css
        {
            test: /\.module\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            namedExport: false,
                        },
                    },
                },
            ],
        },

        // Обычные CSS-файлы
        {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: ['style-loader', 'css-loader'],
        },

        // Изображения
        {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name][contenthash][ext]',
            },
        },
    ],
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};