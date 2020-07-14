const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const app = express()

// Load config
dotenv.config({ path: './config/config.env' })
connectDB()

// Connect to database
mongoose.connect(process.env.MONGO_URI)

app.listen(3000)
