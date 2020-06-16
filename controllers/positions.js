const models = require('../models')

const getAllPositions = async (request, response) => {
  const position = await models.positions.findAll()

  return response.send(position)
}

const getPositionByIdOrTitle = async (request, response) => {
  try {
    const { searchValue } = request.params

    const position = await models.positions.findOne({
      where: {
        [models.Op.or]: [
          { id: searchValue },
          { position: { [models.Op.like]: `%${searchValue}%` } }
        ]
      }
    })

    return position
      ? response.send(position)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to find position')
  }
}

module.exports = { getAllPositions, getPositionByIdOrTitle }
