const express = require('express')
const app = express()
const router = require('./router')

app.use('/', router)
app.listen(3200, function () {
    console.log('服务起来了')
})