const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const fileUpload = require('express-fileupload');
var multer = require('multer');
const app = express();
app.use((express.json()))
app.use(fileUpload());
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
    origin: ["http://localhost:3001","http://localhost:3000"]
}));


app.use(cors());

app.use("/api", require("./src/routes"));
// app.use(multer({ dest: "./uploads/",
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//    }));

// app.post('/upload',(req,res)=>{
//     if(req.files=== null){
//         return res.status(400).json({msg:'No file uploaded'});
//     }
//     const file = req.files.file;
//     file.mv("../react-front/front/pages/main/uploads/"+file.name,err =>{
//         if(err){
//             console.error(err);
//             return res.status(500).send(err);
//         }
//         res.json({fileName:file.name, filePath:`../main/uploads/${file.name}`})
//     });

// })
app.listen(3001);

console.log('Foi'); 