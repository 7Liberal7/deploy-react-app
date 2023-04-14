const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    entry: "./src/client/index.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist/client"),
      filename: "client_bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/client/index.html"
      })
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.ts$|tsx/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.js$|jsx/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: f => {
                let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), path.dirname(f));
                return `${dirNameInsideAssets}/[name].[ext]`;
              }
            }
          }],
        },
        {
          test: /\.(ttf|otf)$/i,
          type: "asset/resource"
        }
      ]
    }
  }
]
