const clientes = require('../model/clientes');

const fs = require('fs');

exports.post = (req,res) =>{
    let cliente = new clientes(req.body);

    cliente.save(function(err){
        if (err) res.status(500).send(err);

        res.status(201).send({
          status: true,
          mensagem: "Cliente incluido com sucesso!"
        });
    })
}

exports.get = (req,res) => {
    clientes.find(function(err, cliente){
        if(err) res.status(500).send(err);

        res.status(200).send(cliente);
    })
}

  exports.getCompradores = (req,res) =>{
    clientes.find({comprou:true},function(err, cliente){
      if(err) res.status(500).send(err);
      const clientesRetorno = cliente.map(cliente => {
        return{
          nome:cliente.nome,
          email:cliente.email
        }
      })

      res.status(200).send(clientesRetorno);
  })
}

exports.getCpf = (req,res) =>{
  const cpf = req.params.cpf;
  clientes.find({cpf},function(err, cliente){
    if(err) res.status(500).send(err);

    res.status(200).send(cliente);
    
  })
}