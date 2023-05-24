const store = require("../storage");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  await store[model].delete(id);
  response(res, 204, { message: `${model} ${id} successfully deleted` });
};
