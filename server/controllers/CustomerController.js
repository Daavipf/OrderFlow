const { Customer } = require('../models')
const FindUser = require('../helpers/findUser')
const hasEmptyFields = require('../helpers/hasEmptyFields')

module.exports = class CustomerController {
  static async insertCustomer(req, res){
    const entries = {
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address
    }
    try {
      if( await FindUser.byEmail(entries.email)){
        return res.status(400).json({message: "Este e-mail já está em uso"})
      }
      await Customer.create(entries)
      return res.status(201).json({message: "O cliente foi inserido"})
    } catch (error) {
      return res.status(500).json({message: "Houve um erro ao inserir um cliente"})
    }
  }

  static async getAllCustomers(req, res){
    try {
      const customersList = await Customer.findAll()
      if(customersList.length == 0){
        return res.status(200).json("Nenhum cliente cadastrado")
      }
      return res.status(200).json(customersList)
    } catch (error) {
      return res.status(500).json({message: "Houve um erro ao buscar a lista de clientes"})
    }
  }

  static async getCustomer(req, res){
    const id = req.params.id
    try {
      if(!await FindUser.byId(id)){
        return res.status(404).json("Cliente não encontrado")
      }
      const customer = await Customer.findOne({
        where: {
          customer_id: id
        }
      })
      return res.status(200).json(customer)
    } catch (error) {
      return res.status(500).json({message: "Houve um erro ao buscar um cliente"})
    }
  }

  static async updateCustomer(req, res){
    const id = req.params.id
    const entries = {
      name: req.body.name,
      email: req.body.email
    }
    try {
      if(!await FindUser.byId(id)){
        return res.status(404).json({message: "Cliente não encontrado"})
      }
      if(await FindUser.byEmail(entries.email)){
        return res.status(400).json({message: "Este email já está em uso"})
      }
      await Customer.update(entries, {
        where: {
          customer_id: id
        }
      })
      return res.status(200).json({message: "Cliente atualizado"})
    } catch (error) {
      return res.status(500).json({message: "Houve um erro ao atualizar um cliente"})
    }
  }

  static async deleteCustomer(req, res){
    const id = req.params.id
    try {
      if(!await FindUser.byId(id)){
        return res.status(404).json({message: "Cliente não encontrado"})
      }
      await Customer.destroy({
        where: {
          customer_id: id
        }
      })
      return res.status(200).json({message: "Cliente apagado"})
    } catch (error) {
      return res.status(500).json({message: "Houve um erro ao apagar um cliente"})
    }
  }
}