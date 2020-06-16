const calculatePostingFee = () => {
  let provider = document.getElementById('fielda').value
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

  alert(cost)
}
