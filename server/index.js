const express = require('express')
const router = require('./router.js')

const cors = require('cors')

const app = express()
module.exports = app

app.use(express.static(__dirname + '/../public'));

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(3000, () => {console.log('listen on port localhost:', 3000)})