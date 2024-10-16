const {Customer} = require('../models')

module.exports = class FindUser {
  static async  byEmail(email){
    const user = await Customer.findOne({where: {email:email}})
    if (user){
      return true
    }
    return false
  }

  static async byId(userId){
    const user = await Customer.findOne({where: {customer_id:userId}})
    if (user){
      return true
    }
    return false
  }
}