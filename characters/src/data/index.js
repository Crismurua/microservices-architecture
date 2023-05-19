const axios = require("axios");

module.exports = {
  list: async () => {
    const response = await axios.get("http://database:8004/Character");
    return response.data;
  },
  find: async (id) => {
    const response = await axios.get(`http://database:8004/Character/${id}`);
    return response.data;
  },
  create: async (newCharacter) => {
    const response = axios.post("http://database:8004/Character", newCharacter);
    return response.data;
  },
};
