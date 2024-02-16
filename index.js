const express = require('express')
const dbConnection = require('./config/dbConnection')
const app = express()
const  route  = require('./route')

app.use(express.json());
app.use(route)
const port = 3000
dbConnection()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})