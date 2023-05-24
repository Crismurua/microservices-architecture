const { catchedAsync } = require("../utils");

module.exports = {
  getModels: catchedAsync(require("./getModels")),
  findModel: catchedAsync(require("./findModel")),
  createModel: catchedAsync(require("./createModel")),
  updateModel: catchedAsync(require("./updateModel")),
  deleteModel: catchedAsync(require("./deleteModel")),
};
