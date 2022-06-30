const mongoose = require('mongoose');

const conteudosSchema = new mongoose.Schema({
    dados: [{
        titulo: String,
        texto: String
    }]
},
{versionKey: false}
)

const conteudos = mongoose.model('conteudos', conteudosSchema);

module.exports = conteudos;