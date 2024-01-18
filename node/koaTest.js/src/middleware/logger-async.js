function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url);
}

export async function loggerAsync(ctx, next) {
  log(ctx);
  await next();
  // Your logger logic here
}
