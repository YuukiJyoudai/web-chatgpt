import mariradb from 'mariadb'
import {config} from './dbconfig.js'

const pool = mariradb.createPool(config)

/**
 * id, ip, pos, msg, time
 */
export const add = ({
    id,
    ip,
    pos,
    msg,
    time
}, values) => {
    return new Promise((resolve, reject) => {
        const sql = `insert into users(id, ip, pos, msg, time) values ('${id}', '${ip}', '${pos}', '${msg}', '${time}')`
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('getConnection err', err)
                reject(err)
            } else {
                connection.query(sql, values, (err, result) => {
                    if (err) {
                        console.log('query err', err)
                        reject(err)
                    } else {
                        console.log('保存成功')
                        connection.release()
                        resolve({
                            status: 200,
                            result
                        })
                    }
                })
            }
        })
    })
}

