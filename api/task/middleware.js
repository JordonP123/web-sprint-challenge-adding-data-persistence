

exports.validatePost = (req,res,next) => {
    if(!req.body.task_description){
        res.status(400).json({ message: 'description is required'})
    }
    if(!req.body.project_id){
        res.status(400).json({ message: 'project id is required'})
    }
    next()
}