// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async(req, res) => {
    try{
        const getIt = await Project.get()
        getIt.map(e => {
            if(e.project_completed === 1){
                e.project_completed = true
            } else {
                e.project_completed = false
            }
        })
        res.json(getIt)
    } catch(err) {
        res.json({ message: err.message})
    }
})

router.post('/', async(req, res) => {
    try{
        const postIt = await Project.post(req.body)
        if(req.body.project_name){
            if(postIt.project_completed === 0){
                postIt.project_completed = false
            } else {
                postIt.project_completed = true
            }
            res.status(201).json(postIt)
        } else {
            res.status(404).json({ message: 'you need a name' })
        }
    } catch(err){
        res.status(500).json({ message: err.message })
    }
})

module.exports = router