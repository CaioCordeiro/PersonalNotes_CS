const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Notes:{
        type: Array,
    },
});
UserSchema.plugin(mongoosePaginate)
mongoose.model("User",UserSchema);  