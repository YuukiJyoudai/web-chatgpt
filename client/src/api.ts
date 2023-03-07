const protocol = 'http'
const ip = '47.105.181.51'
// const ip = 'localhost'
const port = 3000
const url = `${protocol}://${ip}:${port}/message`

const sendMsg = (arr: any) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(arr)
    }).then(async stream => {
        const data = await stream.json()
        return data
    })
}

export {
    sendMsg
}
