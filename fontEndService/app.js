/**
 * 本app.js 适用与 demo1,2,3,4,5,6
 */
const Koa = require('koa');
const app = new Koa();
const server = require('koa-static');
app.use(server(__dirname+"/www/",{ extensions: ['html']}));

console.log('服务运行在:http://127.0.0.1:7777');
app.listen(7777);