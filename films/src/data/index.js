const axios = require("axios");

module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Film");
    return response.data;
  },
  find: async (id) => {
    const response = await axios.get(`http://database:8004/Film/${id}`);
    return response.data;
  },
  create: async (newFilm) => {
    const response = axios.post("http://database:8004/Film", newFilm);
    return response.data;
  },
};
