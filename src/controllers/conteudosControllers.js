const conteudos = require('../models/Conteudo')


class conteudosController {


    static criarConteudo = (req, res)=>{
        let conteudo = new conteudos(req.body);

        conteudo.save((err)=>{
            if(err){
                res.status(500).send({message: err.message + " falha ao criar"})
            } else{
                res.status(201).send((conteudo.toJSON()))
            }
        }) 
    }
    
    static listarTodos = (req, res)=>{
        conteudos.find((err, data)=>{
            res.status(200).json(data)
            })
    }

    static listarPorId = (req, res)=>{
    conteudos.findById('62bcc60d8d7f89ec8ad79572', (err, data)=>{
        res.status(200).json(data)
    });

        
    }
}

module.exports = conteudosController;