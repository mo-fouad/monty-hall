const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { gameLoop } = require('./gameLoop')


const port = 4000;
const server = express();
server.use(cors({}))
server.use(bodyParser.json())

server.get('/', (req, res) => res.send('Hello World!'))

server.post('/play', (req, res) => {
    const {siNumbers, changeDoors} = req.body;

    const gameRes = gameLoop(siNumbers, changeDoors);

    res.json(gameRes)
});


// starting Server
server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))