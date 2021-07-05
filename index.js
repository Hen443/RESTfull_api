const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()

const redirectURI = 'https://tiktok.com'

const postRoute = require('./routes/post')
const authRoute = require('./routes/auth')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use('/api/v1/post', postRoute)
app.use('/api/v1/auth', authRoute)

app.get('/', (req,res)=>{
    res.redirect(301, redirectURI)
})

app.all('*', (req,res) => {
    res.status(404).send({ message: 'Not Found' })
})

async function start (){
    try{
        await mongoose.connect(process.env.mongo_uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(3000, () => {
            console.log(`Server has been started on ${PORT}`)
        })
    
    }catch(error){
        console.log(error);
    }
}

start()
