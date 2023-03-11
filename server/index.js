import Koa from 'koa'
import { koaBody } from 'koa-body'
import ip from 'koa-ip'
import Router from '@koa/router'
import cors from 'koa2-cors'
import {postMsg} from './fetch.js'
import geoip from 'geoip-lite'
import {add} from './sql.js'
import moment from 'moment'
const app = new Koa()
const router = new Router()
let id = +new Date() + 1

app.use(ip({}))
app.use(cors())
app.use(koaBody())

app.use(async (ctx, next) => {
    try {
        const curIp = '::ffff:125.89.56.7'
        const ipObj = geoip.lookup(curIp)
        const {city, country} = ipObj 
        const time = moment(new Date())
        const arr = ctx.request.body || []
        const len = arr.length - 1
        const msg = arr[len].content

        console.log('匹配结果', msg)
        add({
            id,
            ip: curIp,
            pos: `${city}-${country}`,
            msg,
            time
        })
    } catch (error) {
    } finally {
        await next()
    }
})

// 这里应该可以获取用户的ip + 信息
router.post('/message', async (ctx) => {

    const arr = ctx.request.body || []
    const data = await postMsg(arr).then(res => {
        let resData = JSON.parse(res)
        console.log('success json Data:', resData.choices[0].message.content)
        return resData.choices[0].message.content
    }).catch(e => {
        console.log('e', e)
        return e
    })
    ctx.body = {
        data
    }
})
app.use(router.routes())

app.listen(3000, () => {
    console.log('服务器，启动！！')
})