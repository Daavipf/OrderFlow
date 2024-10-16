const { DataTypes } = require('sequelize')
const sequelize = require('../db/database')

const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING},
  phone_number: {type: DataTypes.STRING},
  address: {type: DataTypes.STRING}
})

module.exports = Customer