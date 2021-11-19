const express = require("express")
const config = require('config')
const cors = require('cors')
const list = require("./services/genlist")
const getlst = require("./middleware/getlist")
const dotenv = require('dotenv');

const app = express()
let lst = start()
dotenv.config({path : './config.env'})

app.use(cors())
app.options('*', cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(config.get('api'), getlst(lst), require('./routes/ninjify.route'));

async function start() {
    try {
        lst = await list
        app.listen(process.env.PORT || 3000, () => console.log(`App is starting on port ${process.env.PORT}...`))
        return lst
    } catch(e){
        console.log('Server Error ', e.message)
        process.exit(1)
    }
}