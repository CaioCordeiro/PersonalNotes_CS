const express = require('express');
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/User", UserController.store);
routes.put("/User/:id", UserController.update);
routes.delete("/User/:id", UserController.destroy);
module.exports = routes;