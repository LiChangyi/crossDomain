/**
 * 此app9.js 适用于demo9 进行webSocket跨域
 */
const Koa = require('koa');
const app = new Koa();
const http = require('http').Server(app.callback())
const io = require('socket.io')(http);

io.on('connection', client => {
  console.log('客服端已链接');
  client.on('message', data => {
    if (data === 'getData') {
      console.log('客服端请求获取数据');
      client.send(`服务器发给客服端的数据！！时间： ${new Date()}`);
    }
  });
  client.on('disconnect', () => {
    console.log('客服端已断开链接');
  });
});

console.log('服务运行在:http://127.0.0.1:8888 验证demo9');
http.listen(8888);
