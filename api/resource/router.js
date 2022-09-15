// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const { checkNameUnique } = require('./middleware')

const router = express.Router() 

router.get('/', async(req, res) => {
    try{
        const getIt = await Resource.get()
        res.json(getIt)
    } catch(err) {
        res.json({ message: err.message})
    }
})

router.post('/',checkNameUnique, async(req, res) => {
    try{
        const addResc = await Resource.post(req.body)
        if(req.body.resource_name){
            res.status(201).json(addResc)
        } else {    
            res.status(400).json({ message: 'resource name is required' })
        }
    } catch(err){
        res.json({ message: err.message })
    }
})

module.exports = router