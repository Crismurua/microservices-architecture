const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/films", require("./routes"));

// 404 handler

server.use("*", (req, res) => {
  res.status(404).send("404 Not found");
});

// Error handler

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
