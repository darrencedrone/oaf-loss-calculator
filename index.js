const express = require('express')
// const { ,  } = require('./controllers/positions')
// const { ,  } = require('./controllers/tasks')
// const { ,  } = require('./controllers/jobPostingCosts')

const app = express()

app.get('/jobPostingCosts')
app.get('/jobPostingCosts/:id')

app.get('/positions',)
app.get('/positions/:identifier',)

app.get('/tasks',)
app.get('/tasks/:identifier',)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
