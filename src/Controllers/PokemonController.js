const http = require('http');

module.exports = {
  async list(request, response) {
    let url = 'http://pokeapi.co/api/v2/pokemon/';

    let options = {
      method: "GET"
    }

    let data = "teste";

    let apiRequest = http.request(url, options, function(res) {
      res.on("data", (chunk) => {
        console.log("dados", chunk);
      });
  
      res.on("end", () => {
        response.end(JSON.stringify(data));
      });
    });
  
    apiRequest.write(data)
    apiRequest.end();
  }
}