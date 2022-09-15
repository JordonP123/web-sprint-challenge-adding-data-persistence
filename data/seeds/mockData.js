exports.seed = async function (knex) {
  await knex('projects').insert([
    { project_name: 'Web API', project_description: 'Build APIs', project_completed: 0 },
    { project_name: 'Databases', project_description: 'Learn SQL', project_completed: 1 },
    { project_name: 'Authentication',project_description: 'Learn Node', project_completed: 1 }
  ]);

  await knex('resources').insert([
    { resource_name: 'keyboard' },
    { resource_name: 'computer', resource_description: 'Windows PC' }
  ])

  await knex('tasks').insert([
    { task_description: 'Do foo', project_id: 1 },
    { task_description: 'Do bar', task_notes: 'Use Postman!', project_id: 1 },
    { task_description: 'Do baz', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }
  ])

};