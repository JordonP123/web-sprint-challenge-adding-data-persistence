// build your `Task` model here
const db = require('../../data/dbConfig')

function get(){
   return db('tasks as t')
   .join('projects as p', 'p.project_id', 't.project_id')
}

function getById(id){
    return db('tasks').where('task_id', id).first()
}

async function post(task){
    const [id] = await db('tasks').insert(task)
    return getById(id)
}

module.exports = {
    get,
    post
}