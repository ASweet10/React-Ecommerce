require('dotenv').config()
const path = require('path')
//require('dotenv').config({ path: path.resolve(__dirname, './.env')})
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')

const cors = require('cors')

const app = express()

// Middleware
app.use(express.json())
//app.use(express.static(path.join(__dirname, '../client/build')))  Serve static files from client build

app.use(cors()) // Enables CORS for all origins

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() // Pass control to next middleware
})

// Routes
app.get('/', (req, res) => {
    res.send("Hello from express")
})
app.use('/api/products', productRoutes)
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
