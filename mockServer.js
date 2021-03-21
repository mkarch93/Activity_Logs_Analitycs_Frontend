const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express()
app.use(cors());
app.post('/api/chart', (_,res) => {
    return res.status(200).json(data); //JSON.stringify(data)
})

app.listen(8080);