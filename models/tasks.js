const tasks = (connection, Sequelize, positions) => {
  return connection.define('tasks', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    taskCategory: { type: Sequelize.STRING, allowNull: false },
    hoursSpentOnTaskCategory: { type: Sequelize.INTEGER, allowNull: false },
    positionID: { type: Sequelize.INTEGER, references: { model: positions, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = tasks
