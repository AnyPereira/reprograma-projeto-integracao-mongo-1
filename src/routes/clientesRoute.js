const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

router.get("/", controller.get)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCpf)
router.post("/", controller.post)
router.put("/:cpf", controller.atualizaCpf)
router.delete("/:id", controller.deletarCliente)

module.exports = router