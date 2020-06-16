'use strict'


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('positions', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      position: { type: Sequelize.STRING, allowNull: false },
      salary: { type: Sequelize.DECIMAL, allowNull: false },
      benefits: { type: Sequelize.DECIMAL, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    await queryInterface.createTable('tasks', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      taskCategory: { type: Sequelize.STRING, allowNull: false },
      hoursSpentOnTaskCategory: { type: Sequelize.INTEGER, allowNull: false },
      positionID: { type: Sequelize.INTEGER, references: { model: 'positions', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })

    return queryInterface.createTable('jobPostingCosts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      company: { type: Sequelize.STRING, allowNull: false },
      cost: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE, },
    })
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('jobPostingCosts')
    await queryInterface.dropTable('tasks')

    return queryInterface.dropTable('positions')
  }
}
