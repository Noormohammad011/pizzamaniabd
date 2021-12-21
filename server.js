const express = require('express')
var cors = require('cors')
// import connectDB from './config/db'
const db = require('./config/db')
const path = require('path')
var colors = require('colors')
const pizzasRoute = require('./controllers/pizzaController.js')
const usersRoute = require('./controllers/userController.js')
const ordersRoute = require('./controllers/orderController.js')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

//database connection
db()

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', usersRoute)
app.use('/api/orders/', ordersRoute)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
  })
}


const port = process.env.PORT || 8000

app.listen(port, () =>
  console.log(`Server is running on port ${port}`.blue.underline)
)
