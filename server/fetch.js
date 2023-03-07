import fetch from 'node-fetch'

const api_key = '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'

const postMsg = (arr = []) => {
    return fetch("http://gpt-api.tech/send_message", {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            message: arr,
            api_key
        })
    })
    .then(response => response.text())
}

export {
    postMsg
}


