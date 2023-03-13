import { MongoClient } from 'mongodb'
const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)

export const add = async ({
    id,
    ip,
    pos,
    msg,
    time
}) => {
    try {
        await client.connect()
        const db = client.db('test');
        const collection = db.collection('user');
        await collection.insertOne({
            _id: id,
            ip,
            pos,
            msg,
            time
        })
    } catch (error) {
        console.log('error', error)
    }
}
