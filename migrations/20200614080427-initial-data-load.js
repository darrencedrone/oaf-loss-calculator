'use strict'

module.exports = {
  up: async (queryInterface) => {
  /*
  Add altering commands here.
  Return a promise to correctly handle asynchronicity.
  Example:
  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
*/
    await queryInterface.bulkInsert('positions', [
     { position: 'Corporate Recruiter', taskCategory: 'Recruitment & Hiring', salary: '32.41', benefits: '11.34', hoursSpentOnTaskCategory: 42, },
      { position: taskCategory: salary: benefits: hoursSpentOnTaskCategory },
      { position: taskCategory: salary: benefits: hoursSpentOnTaskCategory },
      { position: taskCategory: salary: benefits: hoursSpentOnTaskCategory },
      { position: taskCategory: salary: benefits: hoursSpentOnTaskCategory },
      { position: taskCategory: salary: benefits: hoursSpentOnTaskCategory },
    ]


    await queryInterface.bulkInsert('jobPostingCosts', [
      { company: 'Jobs.com', cost: 398 },
      { company: 'Glassdoor', cost: 498 },
      { company: 'Monster', cost: 399 },
      { company: 'Career Builder', cost: 398 },
      { company: 'Simply Hired', cost: 0 },
      { company: 'LinkedIn', cost: 990 },
      { company: 'Dice', cost: 395 },
      { company: 'SnagAJob', cost: 178 },
      { company: 'Craigslist', cost: 45 },
      { company: 'Indeed', cost: 300 },
      { company: 'Workable', cost: 198 },
      { company: 'Proven', cost: 203 },
      { company: 'ZipRecruiter', cost: 178 },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
