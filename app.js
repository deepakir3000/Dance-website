const express = require("express"); //Method
const path = require("path"); //For pug
// const fs = require("fs");
const app = express(); // For this app.js file //
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost/admission', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 8000;


// Mangoose//

const admissionSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: String,
    address: String,
    phone: String,
    email: String,
  });

const admission = mongoose.model('admission', admissionSchema);


// Express //

app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Pug //

app.set('view engine', 'pug') // Formula //
app.set('views', path.join(__dirname, 'views'))

// EndPoint //
 
app.get("/", (req, res)=>{ 
    res.status(200).render('home.pug');
});
app.get("/admission", (req, res)=>{ 
    res.status(200).render('admission.pug');
});
app.get("/servises", (req, res)=>{ 
    res.status(200).render('servises.pug');
});

//post//

app.post("/admission", (req, res)=>{ 
    var myData = new admission (req.body);
    myData.save().then(()=>{
        res.send("Data has been saved");
    }).catch(()=>{
        res.status(404).send("Error")
    });

    // res.status(200).render('admission.pug');
});

// Start the surver //

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});