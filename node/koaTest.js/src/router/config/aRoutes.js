import Router from "koa-router";

const page = new Router();

page.get("/", async (ctx) => {
  ctx.body = "我是首页";
});

page.get("/index", async (ctx) => {
  ctx.body = "index page";
});

export default page;
