const { Router } = require('express');

const EventController = require('../Controllers/EventController');
const EventValidator = require('../Validators/EventValidator');

const eventRoutes = Router();

eventRoutes.post('/evento', EventValidator.create, EventController.create);
eventRoutes.get('/evento', EventController.read);
eventRoutes.post('/evento/:id', EventController.update, EventController.update);
eventRoutes.delete(
  '/evento/:id',
  EventValidator.destroy,
  EventController.delete,
);

module.exports = eventRoutes;
