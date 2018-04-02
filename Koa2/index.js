const koa = require('koa')
const app = new koa()

app.use(async(ctx,next)=>{
    ctx.body="test koa"
})

app.listen(2333)