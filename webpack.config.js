const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, "./js/app.js"),
    
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/img', to: './img' },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV",
            filename: "index.html",
            template: "./src/indexTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Badantarbiya",
            filename: "badantarbiya.html",
            template: "./src/badantarbiyaTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Multfilmlar",
            filename: "cartoon.html",
            template: "./src/cartoonTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Ingliz tili darslari",
            filename: "english.html",
            template: "./src/englishTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Ertaklar olami",
            filename: "ertak.html",
            template: "./src/ertakTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Qiziqarli matematika",
            filename: "math.html",
            template: "./src/mathTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Birgalikda rasm chizamiz",
            filename: "rasm.html",
            template: "./src/rasmTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Qoshiqlar",
            filename: "songs.html",
            template: "./src/songsTemp.html",
        }),
        new HtmlWebpackPlugin({
            title: "Bola TV / Murojaat yo'llash",
            filename: "contact.html",
            template: "./src/contactTemp.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      outputPath: './img/'
                    }
                  }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            }
        ]
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
      },
}