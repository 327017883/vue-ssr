const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const vueConf = require('./vue-loader.conf')
const projectRoot = path.resolve(__dirname, '../');
var px2rem = require('postcss-px2rem');

const config = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash:5].js',
    chunkFilename: '[name].chunk[id].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'src': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'vue$': 'vue/dist/vue.common.js',
      '@views': path.resolve(__dirname, '../src/views')
    }
  },
  module: {
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
              {loader:'css-loader'},
              {
                loader:'postcss-loader',
                options:{
                  plugins:function(){
                    return [
                      require('autoprefixer')(),require('postcss-px2rem')({remUnit: 75})
                    ]
                  }
                }
              }
            ]
          })
      },
      {
        test: /\.less$/,
        //loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'less-loader'])
        use: ExtractTextPlugin.extract({
          use: [
              {loader:'css-loader'},
              {
                loader:'postcss-loader',
                options:{
                  plugins:function(){
                    return [
                      require('autoprefixer')(),require('postcss-px2rem')({remUnit: 75})
                    ]
                  }
                }
              },
              {loader:'less-loader'}
            ]
          })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:5].[ext]'
        }
      }
    ]
  },
  plugins: []
}

if (process.env.NODE_ENV !== 'production') {
  config.plugins = []
  return module.exports = config
}


config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
)

module.exports = config