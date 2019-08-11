const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Description:{
        type: String,
    },
    UserImage: {
        type: String,
    },
    Notes: {
        type: Array,
    },
});
UserSchema.plugin(mongoosePaginate)
mongoose.model("User", UserSchema);