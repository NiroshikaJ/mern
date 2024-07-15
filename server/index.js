const express = require('express')
const app = express()
const dotenv =require('dotenv')
const path =require('path')
const db = require('./db')

dotenv.config({path:path.join(__dirname,'./config.env')})

db()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))