const cors = require("cors");
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middleware = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middleware);
server.use(router);
server.use(cors({ origin: "*" }));
server.listen(4500, () => {
  console.log("json server running");
});
