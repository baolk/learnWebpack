const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js',
        // publicPath:'dist/'   //涉及到url的都会在前面拼接这个路径
    },
    module:{
        rules: [
            {
              test: /\.css$/,
              //使用多个loader时是从右向左读
              use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      //当加载图片小于limit时，会将图片编译成base64字符串形式  
                      //当加载图片大于limit时，会使用file-loader模块进行加载
                      limit: 100,
                      name:'img/[name].[hash:8].[ext]'  //重命名图片名称
                    },
                  }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,  //排除node_modules文件
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']  //找es5的文件
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        //别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        //省略引入时的vue后缀
        // extensions:['.vue']
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归@所有'),
        new HtmlWebpackPlugin({
            template:'index.html'    //插入模版 
        }),
    ],
}

