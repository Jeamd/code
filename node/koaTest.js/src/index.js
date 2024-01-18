// import Koa from "koa";
// import { loggerAsync } from "./middleware/logger-async.js";
// import { getHtmlAsync } from "./middleware/getHtml-async.js";

// const app = new Koa();

// app.use(loggerAsync);

// // app.use((ctx, next) => {
// //   let url = ctx.request.url;
// //   ctx.body = "hello koa2" + url;
// //   console.log("hello");
// //   next();
// // });

// app.use(getHtmlAsync);

// app.listen(3000);

// console.log("listen by 3000");

const Koa = require("koa");
const WebSocket = require("ws");
const fs = require("fs");

const app = new Koa();

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ noServer: true });

// 监听客户端连接
wss.on("connection", function connection(ws, req) {
  const clientIpAddress = req.socket.remoteAddress;
  const uniqueId = generateUniqueId();

  console.log(`Client connected from ${uniqueId}`);

  // 如果视频文件流不存在，创建一个新的文件流
  const videoFileStream = fs.createWriteStream(`screen-share-${uniqueId}.webm`);

  // 接收客户端消息
  ws.on("message", function incoming(message) {
    console.log(`received message form ${uniqueId}`);
    // 将接收到的屏幕分享流数据追加到视频文件流中
    videoFileStream.write(message);
  });

  // 客户端断开连接时，关闭视频文件流并写入文件系统
  ws.on("close", function () {
    console.log(`Client disconnected from ${uniqueId}`);
    if (videoFileStream) {
      videoFileStream.end();
      console.log(`Video file saved to screen-share-${uniqueId}.webm`);
    }
  });
});

// 创建 HTTP 服务器
const server = app.listen(3000, () => {
  console.log("Koa app listening on port 3000");
});

// 将 WebSocket 服务器与 HTTP 服务器关联
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}
