const models = require('../models')

const getAllTasks = async (request, response) => {
  const task = await models.tasks.findAll()

  return response.send(task)
}

const getTaskById = async (request, response) => {
  try {
    const { id } = request.params

    const task = await models.tasks.findOne({
      where: { id },
    })

    return task
      ? response.send(task)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to find task')
  }
}

module.exports = { getAllTasks, getTaskById }
