const EventModel = require('../Models/EventModel');

class EventController {
  async create(req, res) {
    try {
      const evento = await EventModel.create(req.body);
      return res.status(200).json(evento);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Evento já existente', error: error.mensagem });
    }
  }

  async read(req, res) {
    try {
      const evento = await EventModel.find();

      return res.status(200).json(evento);
    } catch {
      res.status(500).json({ message: 'ERRO', error: error.mensagem });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const eventoEncontrado = await EventModel.findById(id);

      if (!eventoEncontrado)
        return res.status(404).json({ message: 'Usuario não encontrado' });

      const evento = await eventoEncontrado.set(req.body).save();

      res.status(200).json(evento);
    } catch {
      res.status(500).json({ message: 'ERRO', error: error.mensagem });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const eventoEncontrado = await EventModel.findById(id);

      if (!eventoEncontrado)
        return res.status(404).json({ message: 'Usuario não encontrado' });

      await eventoEncontrado.deleteOne();

      res.status(200).json({ mensagem: 'Evento deletado com sucesso' });
    } catch {
      res.status(500).json({ message: 'ERRO', error: error.mensagem });
    }
  }
}

module.exports = new EventController();
