const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

async function connect(){
  try {
    await sequelize.authenticate()
    console.log("Conectado ao banco de dados")
  } catch (error) {
    console.error("Houve um erro ao conectar ao banco de dados: ", error)
  }
}

connect()

module.exports = sequelize