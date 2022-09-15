const db = require('../../data/dbConfig')

exports.checkNameUnique = async(req, res, next) => {
    const existingName = await db('resources').where('resource_name', req.body.resource_name).first()
    if(existingName){
      res.status(400).json({message: "that name is taken"})
    } else {
      next()
    }
  }