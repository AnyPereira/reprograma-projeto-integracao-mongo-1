const clientes = require('../model/clientes');

const fs = require('fs');

exports.post = (req,res) =>{
    let cliente = new clientes(req.body);

    cliente.save(function(err){
        if (err) res.status(500).send(err);
        res.status(201).send(cliente);
    })
}

exports.get = (req,res) => {
    clientes.find(function(err, cliente){
        if(err) res.status(500).send(err);
        res.status(200).send(cliente);
    })
}

exports.getById = (req, res) => {
    const clienteId = req.params.id
  
    clientes.findById(clienteId, function(err, clientes){
      if (err) return res.status(500).send(err);
  
      if(!clientes){
        return res.status(200).send({message: `Infelizmemte não localizamos o cliente de id: ${clienteId}`});
  
      }
      res.status(200).send(clienteId);
    })
  }