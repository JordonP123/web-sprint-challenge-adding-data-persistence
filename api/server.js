// build your server here and require it from index.js
 const express = require('express')
 const resouceRouter = require('./resource/router')
 const taskRouter = require('./task/router')
 const projectRouter = require('./project/router')


 const server = express()

 server.use(express.json())
 server.use('/api/resources', resouceRouter)
 server.use('/api/tasks', taskRouter)
 server.use('/api/projects', projectRouter)

 module.exports = server