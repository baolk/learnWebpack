# 手动搭建webpack打包过程

1. webpack与gulp最大的区别在于webpack使用模块化打包方式，核心是模块化支持模块化打包；gulp的核心是Task，通过部署任务来依次执行，实现流程自动化；

2. 区别两个概念，配置时注意区分：
  - 开发时依赖：devDependencies，即在开发时需要安装的依赖
  - 运行时依赖：Dependencies，即在运行时安装的依赖
  
3. 使用yarn安装依赖时，注意区分全局和本地

   ```bash
   yarn add webpack --dev   //安装项目本地webpack
   yarn add webpack -g      //全局安装webpack
   ```

   当在终端运行webpack时默认使用的是全局安装的webpack；

   若要使用本地webpack需要在package.json里配置如下，随后运行npm run build

   ```json
   "scripts":{
    "build": "webpack"
   }
   ```

4. loader是webpack的一个非常核心的概念；webpack本身能够处理js代码，也能自动处理js之间的依赖，但是webpack不能处理css、图片、将ES6转换成ES5等，所以需要拓展对应的loader，具体loader可参照webpack官网。**PS：安装时一定要注意版本问题，不然都是坑**

5. plugin是webpack的另一个核心概念，作为webpack的一种插件，是对现有框架的扩充，可用来对js文件进行压缩，并用来搭建本地服务器，实现浏览器的自动刷新。