const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
const nodemailer = require('nodemailer');
module.exports = {
    //Criar um admin
    async storeAdmin(req, res) {
        const admin = await Admin.create(req.body);
        return res.json(admin);
    },
    async showAdmin(req, res) {
        const admin = await Admin.findOne({
            Email: req.params.Email
        });
        console.log(req.params);
        if (admin && (admin.Senha == req.params.Senha)) {
            return res.json({
                Status: true
            })
        } else {
            return res.json({
                Status: false
            })
        }
    },
    async showAll(req, res) {
        const admin = await Admin.find();
        return res.json(admin);
    },
    async destroy(req, res) {
        await Admin.findByIdAndRemove(req.params.id);
        return res.send({
            Status: true,
        });
    },
    async showByEmail(req, res) {

        const user = await Admin.find({
            Email: req.params.email
        });
        console.log(user);
        return res.json(user);

    },
    async sendSenha(req, res) {
        const transporter = nodemailer.createTransport({
            service: "Hotmail",
            auth: {
                user: "api-no-reply@hotmail.com",
                pass: "Admin12345@"
            }
        });

        const email = {
            from: "api-no-reply@hotmail.com",
            to: req.params.Email,
            subject: "Sua Senha",
            text: "Sua senha é:\n" + req.params.Senha,
            // html: "<p>This mail is send using <b>nodemailer</b> on <b>heroku</b></p>"
        };
        //   console.log(email);
        const resp = transporter.sendMail(email, (err, result) => {
            if (err) return res.json(err);
            console.log("Mensagem enviada!!!!" + result);
            return res.json(result);
        });
        //   return res.json(resp);
    }
}