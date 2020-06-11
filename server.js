require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

const logStyle = process.env.LOGSTYLE || 'short'
const welcomeMessage = process.env.WELCOME || `<h2>Let's write some middleware!</h2>`

const server = express()

server.use(cors())
server.use(express.json())

server.use(logger(logStyle))

server.get('/', (req, res) => {
  res.send(welcomeMessage);
})

server.use('/users', userRouter)
server.use('/posts', postRouter)
server.use(errorHandler())
//custom middleware


//function logger(req, res, next) {}

module.exports = server;
