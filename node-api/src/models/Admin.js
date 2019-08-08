const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const AdminSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Senha:{
        type: String,
        required: true,
    },
});
AdminSchema.plugin(mongoosePaginate)
mongoose.model("Admin",AdminSchema);  