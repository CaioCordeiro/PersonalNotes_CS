const mongoose = require('mongoose');
const User = mongoose.model('User');
const multer = require('multer');
const upload = multer({
    dest: '/uploads/'
});

module.exports = {


    //Mostrar todo o banco
    async index(req, res) {
        const {
            page
        } = req.query;
        const user = await User.paginate({}, {
            pages: 2,
            limit: 11
        });
        return res.json(user);
    },
    //Mostrar todo o banco em ordem alfabetica
    async showAlpha(req, res) {
        const user = await User.find().sort({
            'Name': 1
        });
        return res.json(user);
    },
    //Mostrar User especifico pelo id
    async show(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },
    //Mostrar User especifico pelo 'Name'
    async showByName(req, res) {

        const user = await User.findOne({
            Name: req.params.name
        });
        return res.json(user);
    },
    //Mostrar User especifico pelo 'Email'
    async showByEmail(req, res) {
        console.log(req.params.email)
        const user = await User.find({
            Email: req.params.email
        });
        return res.json(user);
    },

    //Criar um User
    async store(req, res) {
        console.log(req.file);
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            Name: req.body.Name,
            Email: req.body.Email,
            Description: req.body.Description,
            UserImage: req.file.path

        });
        user.save().then(result => {
            console.log(result)
            res.status(200).json({
                Status: "Saved"
            })
        })
        // const user = await User.create(req.body);
        return res.json(user);
    },
    //Da Update em um User
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(user);
    },
    //Deleta um User
    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    },
    async clear(req,res){
       User.remove({})
       .then( () => res.json("Clear"))
       .catch( err => res.status(400).json('err: ' + err))

    //    return res.json({
    //        Status: true
    //    });
    }

}