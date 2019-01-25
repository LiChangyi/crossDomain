/**
 *  此app.js 配置有cors 验证demo6
 *  只在跨域6中打开
*/

const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa2-cors');

const app = new Koa();

// 根据后台服务器的类型，打开跨域设置
// cors安全风险很高，所以，实际线上的配置肯定要比这个更加复杂，需要根据自己的需求来做
app.use(cors());

router.get('/api/getdata', ctx => {
  ctx.body = {
    code: 200,
    msg: '我是配置有cors的服务器传输的数据'
  }
})

app.use(router.routes(), router.allowedMethods());

console.log('配置有cors的服务器地址在：http://127.0.0.1:8889');
app.listen(8889);
