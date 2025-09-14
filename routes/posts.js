const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// Gets all posts
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find()
		res.json(posts)
	} catch (err) {
		res.json({ message: err })
	}
})

// submits a post
router.post('/', async (req, res) => {
	const newPosts = new Post({
		title: req.body.title,
		description: req.body.description,
	})
	try {
		const savedPost = await newPosts.save()
		res.json(savedPost)
	} catch (err) {
		res.json({ message: err })
	}
})

// Gets specific posts
router.get('/:postId', async (req, res) => {
	try {
		const post = await Post.findById(req.params.postId)
		res.json(post)
	} catch (err) {
		res.json({ message: err })
	}
})

// Update a post
router.patch('/postId', async (req, res) => {
	try {
		const updatePost = await Post.updateOne(
			{ _id: req.params.postId },
			{ $set: { title: req.body.title } }
		)
		res.json(updatePost)
	} catch (err) {
		res.json({ message: err })
	}
})

// Delete specific post
router.delete('/postId', async (req, res) => {
	try {
		const deletePost = await Post.remove({ _id: req.params.postId })
		res.json(deletePost)
	} catch (err) {
		res.json({ message: err })
	}
})

module.exports = router
