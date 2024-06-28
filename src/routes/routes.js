const { Router } = require('express');

const EventController = require('../Controllers/EventController');
const EventValidator = require('../Validators/EventValidator');

const eventRoutes = Router();

rotas.post('/evento', EventValidator.create, EventController.create);
rotas.get('/evento', EventController.read);
rotas.post('/evento/:id', EventController.update, EventController.update);
rotas.delete('/evento/:id', EventValidator.destroy, EventController.delete);

module.exports = eventRoutes;
