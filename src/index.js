import postgres from 'pg';
import express from 'express';

const client = new postgres.Client({
    user: 'postgres',
    host: 'rf.rs',
    database: 'pagila',
    password: '',
    port: 5432,
})
client.connect()

const app = express()
const port = 3000

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.get('/actor', async (req, res) => {
    const actors = await client.query('SELECT * FROM actor;');
    res.send(actors.rows)
})

app.get('/actor/:actorId', async (req, res) => {
    const actors = await client.query('SELECT * FROM actor WHERE actor_id = $1',[req.params['actorId']]);
    res.send(actors.rows[0])
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
