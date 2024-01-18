import fs from "fs/promises";

const render = async (path) => {
  const data = await fs.readFile(path, "binary");
  return data || "数据为空";
};

export const getHtmlAsync = async (ctx, next) => {
  const url = ctx.request.url;
  if (url.includes("favicon")) {
    return;
  }
  const path = `./view${url}.html`;

  const strHtml = await render(path);
  ctx.body = strHtml;
  console.log("strHtml");
};
