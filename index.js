
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./Router/route')
require('./DB/connection')

const bidwinner=express()

bidwinner.use(cors())
bidwinner.use(express.json())
bidwinner.use(router)
const PORT = 4000 || process.env.PORT

bidwinner.listen(PORT, () => {
    console.log(`bio winner Server Started at Port :${PORT}`);
})

bidwinner.get('/',(req,res)=>{
    res.send('<h1>bio winner Server Started and Waiting For client request!!!</h1>')
})