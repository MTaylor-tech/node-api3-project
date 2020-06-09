const express = require('express');
const router = express.Router();
const db = require('./postDb')
const validatePost = require('../middleware/validatePost')
const validatePostId = require('../middleware/validatePostId')

router.get('/', (req, res, next) => {
  // do your magic!
  db.get()
    .then(posts=>{
      return res.status(200).json(posts)
    })
    .catch(next)
});

router.get('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
  db.getById()
    .then(post=>{
      return res.status(200).json(post)
    })
    .catch(next)
});

router.delete('/:id', validatePostId(), (req, res, next) => {
  // do your magic!
  db.remove(req.params.id)
    .then(data=>{
      return res.status(200).json(data)
    })
    .catch(next)
});

router.put('/:id', validatePostId(), validatePost(), (req, res, next) => {
  // do your magic!
  db.update(req.params.id,req.body)
    .then(data=>{
      return res.status(200).json(data)
    })
    .catch(next)
});

// custom middleware

// function validatePostId(req, res, next) {
//   // do your magic!
// }

module.exports = router;
