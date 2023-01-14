const express = require("express")
const db = require("./utils/database")
const initModels = require("./models/init.model")

const app = express()

const PORT = 8000

db.authenticate()
   .then(() => console.log("autenticación exitosa"))
   .catch((error) => console.log(error))

initModels()

db.sync({ force: true })
   .then(() => console.log("Base de datos sincronizada"))
   .catch((error) => console.log(error))

app.get("/", (req, res) => {
   res.status(200).json({ message: "Bienvenido al servidor" })
})

app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`)
})
