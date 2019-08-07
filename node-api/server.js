const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use((express.json()))

// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:3001"]
// }));

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});

const connect = mongoose.connection
connect.once('open', () => {
    console.log("Conectou");
});

requireDir("./src/models");

app.options('*', cors({
    credentials: true,
    origin: ["http://localhost:3001"]
}));


app.use(cors());

app.use("/api", require("./src/routes"));
app.listen(3001);

console.log('Foi'); 