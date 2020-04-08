const request = require('request');

module.exports = {
  async list(req, res) {
    let url = 'http://pokeapi.co/api/v2/pokemon/';

    request(url, (err, res, body) => {
      console.log(body);
    });
  }
}