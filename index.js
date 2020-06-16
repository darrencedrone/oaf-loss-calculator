const express = require('express')
const path = require('path')
const { getAllJobPostingCosts, getJobPostingCostByCompanyOrId } = require('./controllers/jobPostingCosts')
const { getAllPositions, getPositionByIdOrTitle } = require('./controllers/positions')
const { getAllTasks, getTaskById } = require('./controllers/tasks')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/jobpostingcosts', getAllJobPostingCosts)
app.get('/jobpostingcosts/:searchValue', getJobPostingCostByCompanyOrId)

app.get('/positions', getAllPositions)
app.get('/positions/:searchValue', getPositionByIdOrTitle)

app.get('/tasks', getAllTasks)
app.get('/tasks/:id', getTaskById)


app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
