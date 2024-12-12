require('dotenv').config()
const express=require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hello World! twitter')
  })
app.listen(process.env.MY_PORT, () => {
  console.log(`Example app listening on port ${process.env.MY_PORT}`)
})
