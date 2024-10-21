const express = require('express')
const mongoose = require('mongoose')
const Product = require('../models/productModel')

const router = express.Router()

// GET all products
router.get('/', async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1}) // Get all, most recent first

    res.status(200).json(products)
})

// GET one product
router.get('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Product not found"})
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({ error: "Product not found" })
    }

    res.status(200).json(product)
})

// POST new product
router.post('/', async (req, res) => {
    const { title, description, price, salePrice, colors, src1, src2 } = req.body

    try {
        const product = await Product.create({ title, description, price, salePrice, colors, src1, src2 })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({ mssg: 'POST new product'})
})

// DELETE product
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Product not found"})
    }

    const product = await Product.findOneAndDelete({_id: id})

    if (!product) {
        return res.status(400).json({ error: "Product not found" })
    }

    res.status(200).json(product)
})

// UPDATE a product
router.patch('/:id', async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Product not found"})
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!product) {
        return res.status(400).json({ error: "Product not found" })
    }

    res.status(200).json(product)
})

module.exports = router