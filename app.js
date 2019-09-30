const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

const db = require('./config/keys').mongoURI;
mongoose.connect(db,{useUnifiedTopology: true,useNewUrlParser: true})
    .then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log('Unable to connect');
        console.log(err);
});

// app.get('/',(req,res)=>{
//     res.send("Проверка");
// })

// app.post('/check',(req,res)=>{
//     console.log(req.body);
//     res.status(200).json({
//         msg:'ok'
//     })
// });



const users = require('./routes/api/users');
app.use('/api/users',users);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Server started on port '+ PORT);
});
