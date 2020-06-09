const express = require('express')
const db = require('./userDb')
const validateUser = require('../middleware/validateUser')
const validateUserId = require('../middleware/validateUserId')

const router = express.Router();

router.post('/', validateUser(), (req, res, next) => {
  // do your magic!
  db.insert(req.body)
		.then((user) => {
			res.status(201).json(user)
		})
		.catch(next)
});

router.post('/:id/posts', (req, res, next) => {
  // do your magic!
});

router.get('/', (req, res, next) => {
  // do your magic!
  db.get()
    .then(users=>{
      return res.status(200).json(users)
    })
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  // do your magic!
});

router.get('/:id/posts', (req, res, next) => {
  // do your magic!
});

router.delete('/:id', (req, res, next) => {
  // do your magic!
});

router.put('/:id', (req, res, next) => {
  // do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
// }
//
// function validateUser(req, res, next) {
//   // do your magic!
// }
//
// function validatePost(req, res, next) {
//   // do your magic!
// }

module.exports = router;
