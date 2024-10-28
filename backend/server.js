//require('dotenv').config()
require('dotenv').config({ path: path.resolve(__dirname, './.env')})
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')

const cors = require('cors')

const app = express()

// Middleware
app.use(express.json())
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true
    }
))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/products', productRoutes)

mongoose.connect(process.env.MONGDB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    
