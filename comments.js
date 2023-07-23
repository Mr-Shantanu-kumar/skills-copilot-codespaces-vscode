//create web server
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Comment } = require('../models');

// GET /comments
router.get('/', (req, res) => {
    db.Comment.findAll()
    .then(comments => {
        res.json(comments);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

// GET /comments/:id
router.get('/:id', (req, res) => {
    db.Comment.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(comment => {
        res.json(comment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

// POST /comments
router.post('/', (req, res) => {
    db.Comment.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    .then(newComment => {
        res.json(newComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

// PUT /comments/:id
router.put('/:id', (req, res) => {
    db.Comment.update({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(updatedComment => {
        res.json(updatedComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

// DELETE /comments/:id
router.delete('/:id', (req, res) => {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedComment => {
        res.json(deletedComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router;