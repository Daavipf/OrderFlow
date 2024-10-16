require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const customer = require('./routes/customerRoutes')
app.use('/customer', customer)

app.listen(process.env.PORT, () => {
  console.log(`App rodando na porta ${process.env.PORT}`)
})