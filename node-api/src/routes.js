const express = require('express');
const routes = express.Router();
const UserController = require("./controllers/UserController");
//Mostrar todo o banco
routes.get("/user", UserController.index);
//Mostrar todo o banco em ordem alfabetica
routes.get("/user/alpha",UserController.showAlpha);
//Mostrar User especifico pelo id
routes.get("/user/:id", UserController.show);
//Mostrar User especifico pelo 'Name'
routes.get("/user/name/:name", UserController.showByName);
//Criar um User
routes.post("/user", UserController.store);
//Da Update em um User
routes.put("/user/:id", UserController.update);
//Deleta um User
routes.delete("/user/:id", UserController.destroy);

module.exports = routes;