/**
 * 此app8.js 配置了代理 验证demo8
 */
const Koa = require('koa');
// 代理
const Proxy = require('koa-proxy');
// 对以前的异步函数进行转换
const Convert = require('koa-convert');

const app = new Koa();
const server = require('koa-static');
app.use(server(__dirname+"/www/",{ extensions: ['html']}));

app.use(Convert(Proxy({
  // 需要代理的接口地址
  host: 'http://127.0.0.1:8888',
  // 只代理/api/开头的url
  match: /^\/api\//
})));

console.log('服务运行在:http://127.0.0.1:7777');
app.listen(7777);