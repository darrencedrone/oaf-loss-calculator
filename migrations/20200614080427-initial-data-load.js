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
      { position: 'Corporate Recruiter', salary: 32.41, benefits: 11.34 },
      { position: 'Director of Engineering(Hiring Manager)', salary: 84.33, benefits: 29.52 },
      { position: 'IT Technician', salary: 21.79, benefits: 7.63 },
      { position: 'HR Manager', salary: 40.79, benefits: 14.28 },
      { position: 'CEO, Executives', salary: 84.16, benefits: 29.46 },
      { position: 'Peer Worker (Estimated 3 people)', salary: 48.09, benefits: 16.83 },
    ])

    await queryInterface.bulkInsert('tasks', [
      { taskCategory: 'Exit of Employee', hoursSpentOnTaskCategory: 0, positionID: 1 },
      { taskCategory: 'Exit of Employee', hoursSpentOnTaskCategory: 0, positionID: 2 },
      { taskCategory: 'Exit of Employee', hoursSpentOnTaskCategory: 0, positionID: 3 },
      { taskCategory: 'Exit of Employee', hoursSpentOnTaskCategory: 4, positionID: 4 },
      { taskCategory: 'Exit of Employee', hoursSpentOnTaskCategory: 0, positionID: 5 },
      { taskCategory: 'Exit of Employee', hoursSpentOnTaskCategory: 64, positionID: 6 },
      { taskCategory: 'Recruitment and Hiring', hoursSpentOnTaskCategory: 42, positionID: 1 },
      { taskCategory: 'Recruitment and Hiring', hoursSpentOnTaskCategory: 26, positionID: 2 },
      { taskCategory: 'Recruitment and Hiring', hoursSpentOnTaskCategory: 0, positionID: 3 },
      { taskCategory: 'Recruitment and Hiring', hoursSpentOnTaskCategory: 20, positionID: 4 },
      { taskCategory: 'Recruitment and Hiring', hoursSpentOnTaskCategory: 9, positionID: 5 },
      { taskCategory: 'Recruitment and Hiring', hoursSpentOnTaskCategory: 9, positionID: 6 },
      { taskCategory: 'Onboarding', hoursSpentOnTaskCategory: 0, positionID: 1 },
      { taskCategory: 'Onboarding', hoursSpentOnTaskCategory: 20, positionID: 2 },
      { taskCategory: 'Onboarding', hoursSpentOnTaskCategory: 2, positionID: 3 },
      { taskCategory: 'Onboarding', hoursSpentOnTaskCategory: 5, positionID: 4 },
      { taskCategory: 'Onboarding', hoursSpentOnTaskCategory: 0, positionID: 5 },
      { taskCategory: 'Onboarding', hoursSpentOnTaskCategory: 57, positionID: 6 },
    ])

    return queryInterface.bulkInsert('jobPostingCosts', [
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

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('jobPostingCosts')

    await queryInterface.bulkDelete('tasks')

    return queryInterface.bulkDelete('positions')
  }
}

