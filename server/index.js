import Koa from 'koa'
import { koaBody } from 'koa-body'
import Router from '@koa/router'
import cors from 'koa2-cors'
import {postMsg} from './fetch.js'

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(koaBody())
router.post('/message', async (ctx) => {
    const arr = ctx.request.body || []
    const data = await postMsg(arr).then(res => {
        console.log('success---', res)
        let resData = JSON.parse(res)
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