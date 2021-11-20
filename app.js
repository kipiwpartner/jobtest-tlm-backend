const express = require("express")
const config = require('config')
const cors = require('cors')
const dotenv = require('dotenv');

const app = express()
start()
dotenv.config({path : './config.env'})

app.use(cors())
app.options('*', cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(config.get('api'), require('./routes/ninjify.route'));
//test
async function start() {
    try {
        app.listen(process.env.PORT || 3000, () => console.log(`App is starting on port ${process.env.PORT}...`))
    } catch(e){
        console.log('Server Error ', e.message)
        process.exit(1)
    }
}