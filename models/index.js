const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')

const positionsModel = require('./positions')
const tasksModel = require('./tasks')
const jobPostingCostsModel = require('./jobPostingCosts')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const positions = positionsModel(connection, Sequelize)
const tasks = tasksModel(connection, Sequelize, positions)
const jobPostingCosts = jobPostingCostsModel(connection, Sequelize)

tasks.belongsTo(positions)
positions.hasMany(tasks)


module.exports = {
  positions,
  tasks,
  jobPostingCosts,
  Sequelize,
  Op: Sequelize.Op,
}
