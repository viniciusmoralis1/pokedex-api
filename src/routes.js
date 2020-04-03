const { Router } = require('express');
const pokeController = require('./controllers/PokemonController');
const routes = Router();

routes.get('/pokemon', pokeController.list);

module.exports = routes;