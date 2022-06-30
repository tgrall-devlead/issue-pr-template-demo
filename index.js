const express = require('express')
const app = express()
const port = 3000

const calculator = require('./calculator')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add/:a/:b', (req, res) => {
  const a = parseInt(req.params.a)
  const b = parseInt(req.params.b)
  const result = calculator.add(a, b)
  res.send(`${a} + ${b} = ${result}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

