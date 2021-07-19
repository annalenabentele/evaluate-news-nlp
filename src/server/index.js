var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
var cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')


const app = express();
app.use(cors())
app.use(bodyParser.json())

dotenv.config();

app.use(express.static('dist'))

console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/evaluate', function (req, res) {
    fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&txt=" + req.body.text + "&lang=en")
         .then(res => res.json())
         .then(json => res.send(json))
})
