/**
 *  此app.js 没有配置cors
*/

const Koa = require('koa');
const router = require('koa-router')();
const server = require('koa-static');

const app = new Koa();
app.use(server(__dirname+"/www/",{ extensions: ['html']}))

router.get('/api/getdata', ctx => {
  const params = get_params(ctx.request.url)
  const data = {
    title: '数据获取',
    list: [0, 1, 2]
  }
  ctx.body = `${params.jsonp || 'callback'}(${JSON.stringify(data)})`;
})

app.use(router.routes(), router.allowedMethods());

function get_params(url) {
  const [, paramsStr] = url.split('?');
  if (!paramsStr) return {};
  const paramsArr = paramsStr.split('&');
  const obj = {};
  paramsArr.forEach(item => {
    const [key, val] = item.split('=');
    obj[key] = val;
  });
  return obj;
}
 
console.log('服务运行在:http://127.0.0.1:8888');
app.listen(8888);