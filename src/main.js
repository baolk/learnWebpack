import {add,mul} from "./js/math.js"

console.log(add(1,2));
console.log(mul(1,2));

//依赖css文件
require('./css/normal.css')
//依赖less文件
require('./css/special.less')

//使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})