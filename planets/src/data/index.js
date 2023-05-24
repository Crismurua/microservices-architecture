const planets = require("./planets.json");

module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Planet");
    return response.data;
  },
  find: async (id) => {
    const response = await axios.get(`http://database:8004/Planet/${id}`);
    return response.data;
  },
  create: async (newPlanet) => {
    const response = axios.post("http://database:8004/Planet", newPlanet);
    return response.data;
  },
  update: async (id, planet) => {
    const response = axios.put(`http://database:8004/Planet/${id}`, planet);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`http://database:8004/Planet/${id}`);
    return response.data;
  },
};
