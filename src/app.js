const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()

//String de conexão com o mongodb
//porta padrão do mongo: 27017
//banco de dados utilizado: reprograma

mongoose.connect("mongodb://localhost:27017/clientes",  { useNewUrlParser: true, useUnifiedTopology: true});

//representação da conexão com o banco de dados 
let db = mongoose.connection;

//após a conexão,caso ocorra um erro, retornará o erro
db.on("error", console.log.bind(console, "connection error:"))

//uma vez que a conexão esteja aberta, será exibida essa mensagem
db.once("open", function(){
    console.log("conexão feita com sucesso!")
})

//rotas
const index = require("./routes/index")
const clientes = require("./routes/clientesRoute")

//app.use(express)
app.use(function(req,res,next){
    res.header("Acess-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    next()
})

//cria dentro do mongo

app.use(bodyParser.json());

app.use("/", index)
app.use("/clientes", clientes)

module.exports = app