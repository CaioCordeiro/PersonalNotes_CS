const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {


    //Mostrar todo o banco
    async index(req, res) {
        const {page} = req.query;
        const user = await User.paginate({},{page});
        return res.json(user);
    },
    //Mostrar todo o banco em ordem alfabetica
    async showAlpha(req,res){
        const user = await User.find().sort({'Name': 1});
        return res.json(user);
    },
    //Mostrar User especifico pelo id
    async show(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },
    //Mostrar User especifico pelo 'Name'
    async showByName(req,res){
        const user = await User.findOne({ Name: req.params.name });
        return res.json(user);
    },
    async showByEmail(req,res){
        const user = await User.findOne({ Email: req.params.name });
        return res.json(user);
    },
    //Criar um User
    async store(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    },
    //Da Update em um User
    async update(req,res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(user);
    },
    //Deleta um User
    async destroy(req, res){
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    }

}