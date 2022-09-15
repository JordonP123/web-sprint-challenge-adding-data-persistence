// build your `Project` model here
const db = require('../../data/dbConfig')

function get(){
   return db('projects')
}

function getById(id){
    return db('projects').where('project_id', id).first()
}

async function post(project){
    const [proj_id] = await db('projects').insert(project)
    return getById(proj_id)
}

module.exports = {
    get,
    post,
    getById
}