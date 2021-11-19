const express = require("express")
const config = require('config')
const path = require('path')
const cors = require('cors')
const list = require("./services/genlist")
const getlst = require("./middleware/getlist")

const app = express()
let lst = start()

app.use(cors())
app.options('*', cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(config.get('api'), getlst(lst), require('./routes/ninjify.route'));

async function start() {
    try {
        lst = await list
        app.listen(config.get('port'), () => console.log(`App is starting on port ${config.get('port')}...`))
        return lst
    } catch(e){
        console.log('Server Error ', e.message)
        process.exit(1)
    }
}