const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
	res.send('We are on posts')
})

router.post('/', (req, res) => {
	const posts = req.body
})

module.exports = router
