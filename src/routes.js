const { Router } = require('express');
const EventoController = require('./Controllers/EventoController');
const EventoValidator = require('./Validators/EventoValidator');

const rotas = Router();

rotas.post('/evento', EventoValidator.create, EventoController.create);
rotas.get('/evento', EventoController.read);
rotas.post('/evento/:id', EventoController.update, EventoController.update);
rotas.delete('/evento/:id', EventoValidator.destroy, EventoController.delete);

module.exports = rotas;
