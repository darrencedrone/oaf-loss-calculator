const jobPostingCosts = (connection, Sequelize) => {
  return connection.define('jobPostingCosts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    company: { type: Sequelize.STRING, allowNull: false },
    cost: { type: Sequelize.INTEGER, allowNull: false },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = jobPostingCosts
