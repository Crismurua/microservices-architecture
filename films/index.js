const server = require("./src/server");
const { createProxyMiddleware } = require("http-proxy-middleware");

server.use(
  "/database",
  createProxyMiddleware({
    target: "http://database:8004",
    changeOrigin: true,
  })
);

const PORT = 8002;

server.listen(PORT, () => {
  console.log(`Films service listening on port ${PORT}`);
});
