const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventoSchema = new Schema({
  nome: {
    type: String,
    unique: true,
  },
  descricao: String,
  URLimagem: String,
  tipo: String,
});
const EventoModel = mongoose.model('evento', EventoSchema);

module.exports = EventoModel;
