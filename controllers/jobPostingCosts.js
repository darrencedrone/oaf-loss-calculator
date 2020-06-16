const models = require('../models')

const getAllJobPostingCosts = async (request, response) => {
  const costs = await models.jobPostingCosts.findAll()

  return response.send(costs)
}

const getJobPostingCostByCompanyOrId = async (request, response) => {
  try {
    const { searchValue } = request.params

    const posting = await models.jobPostingCosts.findOne({
      where: {
        [models.Op.or]: [
          { id: searchValue },
          { company: { [models.Op.like]: `%${searchValue}%` } }
        ]
      }
    })

    return posting
      ? response.send(posting)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to find job posting cost')
  }
}

module.exports = { getAllJobPostingCosts, getJobPostingCostByCompanyOrId }
