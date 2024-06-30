const { Router } = require('express');

const eventRoutes = require('./routes');

const routes = Router();

routes.use('/evento', eventRoutes);

module.exports = routes;
