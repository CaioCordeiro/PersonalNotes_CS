const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
module.exports = {
    //Criar um admin
    async storeAdmin(req, res) {
        const admin = await Admin.create(req.body);
        return req.json(admin);
    },
    async showAdmin(req, res) {
        const admin = await Admin.findOne({
            Email: req.params.Email
        });

        if (admin && admin.Senha == req.params.Senha) {
            return res.json({
                Status: true
            })
        } else {
            return res.json({
                Status: false
            })
        }
    },
}