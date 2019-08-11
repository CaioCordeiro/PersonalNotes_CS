const express = require('express');
const routes = express.Router();
const UserController = require("./controllers/UserController");
const AdminController = require("./controllers/AdminController");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/caio/Desktop/Projeto_SC/PersonalNotes_CS/react-front/front/uploads');
    },
    filename: function (req, file, cb) {
        date = new Date().toISOString();
        cb(null, date+file.originalname);
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    fileFilter:fileFilter,
});
//Mostrar todo o banco
routes.get("/user", UserController.index);
//Mostrar todo o banco em ordem alfabetica
routes.get("/user/alpha", UserController.showAlpha);
//Mostrar User especifico pelo id
routes.get("/user/:id", UserController.show);
//Mostrar User especifico pelo 'Name'
routes.get("/user/name/:name", UserController.showByName);
//Mostrar User especifico pelo 'Email'
routes.get("/user/email/:email", UserController.showByEmail);
//Criar um User
routes.post("/user", upload.single('userImage'), UserController.store);
//Da Update em um User
routes.put("/user/:id", UserController.update);
//Deleta um User
routes.delete("/user/:id", UserController.destroy);

routes.delete("/user/clear", UserController.clear);

//Cria um Admin
routes.post("/admin/create",AdminController.storeAdmin);
//Check login
routes.post("/admin/login",AdminController.showAdmin);
module.exports = routes;