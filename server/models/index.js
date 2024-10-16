const sequelize = require('../db/database')
const Customer = require('../models/Customer')

sequelize.sync()

module.exports = {
  Customer
}