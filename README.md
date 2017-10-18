关于 webpack2.0 postcss-px2rem postcss-loader用法
1、第一种用法

```javascript
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
}

2、第二种用法

```javascript
{
	test: /\.css$/,
	use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader' ])
}
在对应的css目录增加  postcss.config.js 配置文件

```javascript
module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-px2rem')({remUnit: 75})
    ]
}

处理 vue里面 css 
plugins 增加

```javascript
new webpack.LoaderOptionsPlugin({
   options: {       
      vue: {
        postcss: [px2rem({remUnit: 75})]
      }
   }
})
