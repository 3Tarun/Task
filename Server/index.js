const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const TodoModel = require('./models/todo')
const ProductModel = require('./models/product')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://dhanushags:dhanushags@cluster0.t9okc6d.mongodb.net/database')

app.get('/get',(req,res)=>{
    ProductModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.get('/get_product',(req,res)=>{
    const slug = req.query.slug;
console.log(slug)
    ProductModel.findOne({slug:slug})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.post('/add', (req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result=> res.json(result))
    .catch(err => res.json(err))
})
app.post('/add_product', (req,res)=>{
    console.log(res.body)
    const task = req.body;
    ProductModel.create(task).then(result=> res.json(result))
    .catch(err => res.json(err))
})
app.listen(3001, ()=>{
    console.log("server is running")
})