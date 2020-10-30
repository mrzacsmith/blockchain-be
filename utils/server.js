const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

const currentTime = new Date().toLocaleTimeString('en-US')

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Success',
    dateTime: currentTime,
    author: `Github @MrZacSmith`,
  })
})

module.exports = server
