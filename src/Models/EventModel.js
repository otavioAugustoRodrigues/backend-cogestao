const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  nome: {
    type: String,
    unique: true,
  },
  descricao: String,
  URLimagem: String,
  tipo: String,
});
const EventModel = mongoose.model('evento', EventSchema);

module.exports = EventModel;
