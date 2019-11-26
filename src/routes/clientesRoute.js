const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

//apidoc -i src/ -o public/apidoc

/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * * 
 * @apiSuccess {Object[]} clientes Lista de Clientes
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }]
 * */

router.get("/", controller.get)
router.get("/compradores", controller.getCompradores)
router.get("/:cpf", controller.getCpf)
router.post("/", controller.post)
router.put("/:cpf", controller.atualizaCpf)
router.delete("/:cpf", controller.deletarCliente)

module.exports = router