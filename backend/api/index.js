// This file is necessary for vercel deployment; Must be in api folder

require('dotenv').config()
const path = require('path')
//require('dotenv').config({ path: path.resolve(__dirname, './.env')})
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('../routes/productRoutes')

const cors = require('cors')

const app = express()

// Middleware
app.use(express.json())
// Serve static files from client build
//app.use(express.static(path.join(__dirname, '../client/build')))


app.use(cors()) // Enables CORS for all origins

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() // Pass control to next middleware
})

// Routes
app.get('/', (req, res) => {
    res.send("Hello from express")
})
//app.use('/api/products', productRoutes)

app.use('/', productRoutes) // for vercel deployment, from https://stackoverflow.com/questions/72584745/having-problem-deploying-express-server-on-vercel-404-page-not-found

/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})
*/

mongoose.connect(process.env.MONGDB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
