//create web server
//import express
const express = require('express');
const router = express.Router();

//import model
const Comment = require('../models/Comment');

// @route GET api/comments
// @desc Get all comments
// @access Public
router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments));
});

// @route POST api/comments
// @desc Create a comment
// @access Public
router.post('/', (req, res) => {
    const newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });
    newComment.save().then(comment => res.json(comment));
});

// @route DELETE api/comments/:id
// @desc Delete a comment
// @access Public
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => comment.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});