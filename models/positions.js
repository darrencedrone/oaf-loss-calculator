const positions = (connection, Sequelize) => {
  return connection.define('positions', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    position: { type: Sequelize.STRING, allowNull: false },
    salary: { type: Sequelize.INTEGER, allowNull: false },
    benefits: { type: Sequelize.INTEGER, allowNull: false },
  }, {
    defaultScope: { attributes: { exclude: ['deletedAt'] } }
  }, { paranoid: true })
}

module.exports = positions
