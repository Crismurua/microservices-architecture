const server = require("./src/server");
const { createProxyMiddleware } = require("http-proxy-middleware");

server.use(
  "/database",
  createProxyMiddleware({
    target: "http://database:8004",
    changeOrigin: true,
  })
);

const PORT = 8003;

server.listen(PORT, () => {
  console.log(`Planets service listening on port ${PORT}`);
});
