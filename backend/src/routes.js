const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const InsidentController = require('./controllers/InsidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/sessions', SessionController.create)

routes.get('/profille', ProfileController.index)

routes.get('/insidents', InsidentController.index);
routes.post('/insidents', InsidentController.create);
routes.delete('/insidents/:id', InsidentController.delete);

module.exports = routes;