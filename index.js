const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

const cors = require('koa2-cors')
app.use(cors());

const staticServer = require('koa-static')
const path = require('path')
app.use(staticServer(path.join(__dirname, './static')))

var getCateList = require('./service/catelist')
var getGoodslist = require('./service/goodslist')
var getGoodsData = require('./service/goodsdata')
var getAddressList = require('./service/addressdata')

router.get('/goodscate', function (ctx) {
    ctx.status = 200
    ctx.body = getCateList()
})
router.get('/goodslist/:cate_id', function (ctx) {
    var cate_id = ctx.params.cate_id
    // console.log(getGoodslist(cate_id));
    ctx.body = getGoodslist(cate_id)
})
router.get('/goods/:goods_id', function (ctx) {
    var goods_id = ctx.params.goods_id
    var goodsdata =getGoodsData() 
    for(var i=0;i<goodsdata.length;i++){
        if(goods_id==goodsdata[i].id){
            ctx.body =goodsdata[i]
            return
        }
    }
})
router.get('/address/:user_id', function (ctx) {
    var user_id = ctx.params.user_id
    ctx.body = getAddressList(user_id)
})

app.use(router.routes())
    .use(router.allowedMethods())


app.listen('3000', function (err) {
    if (err) {
        console.log(err);
    }
    else console.log('run...');

})

