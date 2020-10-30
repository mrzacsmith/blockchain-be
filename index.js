require('dotenv').config()
require('colors')

const server = require('./utils/server.js')
const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`\n** Blockchain server is running on port ${PORT}`.america)
})
