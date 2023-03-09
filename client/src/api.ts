const protocol = 'http'
const port = 3000
const ip = import.meta.env.VITE_GPT_IP
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
