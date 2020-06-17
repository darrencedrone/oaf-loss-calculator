const calcPostingFee = () => {
  let provider = document.getElementById('jobPostingSite').value
  let cost

  switch (provider) {
    case 'Jobs.com':
      cost = 398
      break
    case 'Glassdoor':
      cost = 498
      break
    case 'Monster':
      cost = 399
      break
    case 'Career Builder':
      cost = 398
      break
    case 'Simply Hired':
      cost = 0
      break
    case 'LinkedIn':
      cost = 990
      break
    case 'Dice':
      cost = 395
      break
    case 'SnagAJob':
      cost = 178
      break
    case 'Craigslist':
      cost = 45
      break
    case 'Indeed':
      cost = 300
      break
    case 'Workable':
      cost = 198
      break
    case 'Proven':
      cost = 203
      break
    case 'ZipRecruiter':
      cost = 178
      break
    default:
      cost = 'not found'
  }

  return cost
}

const calcEmployeeExit = () => {
  let totalSalary = document.getElementById('careerSelection').value
  let cost

  switch (totalSalary) {
    case 'Corporate Recruiter':
      cost = 0
      break
    case 'Director of Engineering (Hiring Manager)':
      cost = 0
      break
    case 'It Technician':
      cost = 0
      break
    case 'Human Resources Manager':
      cost = 220.27
      break
    case 'CEO, Executives/Decision-Maker':
      cost = 0
      break
    case 'Peer Worker (Estimated 3 people)':
      cost = 4154.98
      break
    default:
      cost = 'not found'
  }

  return cost
}

const calcRecruitementAndHiring = () => {
  let totalSalary = document.getElementById('careerSelection').value
  let cost

  switch (totalSalary) {
    case 'Corporate Recruiter':
      cost = 1837.65
      break
    case 'Director of Engineering (Hiring Manager)':
      cost = 2959.98
      break
    case 'It Technician':
      cost = 0
      break
    case 'Human Resources Manager':
      cost = 1101.33
      break
    case 'CEO, Executives/Decision-Maker':
      cost = 1022.51
      break
    case 'Peer Worker (Estimated 3 people)':
      cost = 584.29
      break
    default:
      cost = 'not found'
  }

  return cost
}

const calcOnboarding = () => {
  let totalSalary = document.getElementById('careerSelection').value
  let cost

  switch (totalSalary) {
    case 'Corporate Recruiter':
      cost = 0
      break
    case 'Director of Engineering (Hiring Manager)':
      cost = 2276.91
      break
    case 'It Technician':
      cost = 58.33
      break
    case 'Human Resources Manager':
      cost = 275.33
      break
    case 'CEO, Executives/Decision-Maker':
      cost = 0
      break
    case 'Peer Worker (Estimated 3 people)':
      cost = 1947.65
      break
    default:
      cost = 'not found'
  }

  return cost
}

const calcPersonnelCosts = () => {
  let totalCost = calcEmployeeExit() + calcRecruitementAndHiring() + calcOnboarding()

  return totalCost
}

const calcSeparationPay = () => {
  return (document.getElementById('annualSalary').value / 26)
}

const calcProductivity = () => {
  return (document.getElementById('annualSalary').value * .15 / 365 * 120)
}

const sumAllCalculations = () => {
  finalCost = Math.round((calcPersonnelCosts() + calcSeparationPay() + calcProductivity() + calcPostingFee()) * 100) / 100

  document.getElementById('finalCost').innerHTML = finalCost
}