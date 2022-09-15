// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const {validatePost} = require('./middleware')

const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const getIt = await Task.get()
        getIt.map(e => {
            if(e.task_completed === 1){
                e.task_completed = true
            } else {
                e.task_completed = false
            }
        })
        res.json(getIt)
    } catch(err) {
        res.json({ message: err.message})
    }
})

router.post('/', validatePost, async(req, res, next) => {
    try{
        const addTask = await Task.post(req.body)
            if(addTask.task_completed === null){
                addTask.task_completed = false
            } else {
                addTask.task_completed = true
            }
        res.status(201).json(addTask)
    } catch(err){
        next(err)
    }
})

module.exports = router
