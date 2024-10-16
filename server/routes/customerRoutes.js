const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/CustomerController')

router.post('/insert', CustomerController.insertCustomer)
router.get('/get-all', CustomerController.getAllCustomers)
router.get('/get/:id', CustomerController.getCustomer)
router.put('/update/:id', CustomerController.updateCustomer)
router.delete('/delete/:id', CustomerController.deleteCustomer)

module.exports = router