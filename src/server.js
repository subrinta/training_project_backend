const express = require('express')
require('./db/mongoose')
const uesrRouter = require('./routers/userRouter')

const app = express()
const port = 3000

app.use(express.json())
app.use(uesrRouter)

app.listen(port, ()=>{
    console.log('srever is up on port: ', port)
})