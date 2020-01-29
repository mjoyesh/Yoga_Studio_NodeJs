const express = require('express');
const contact = require('./routes/contactRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 10000;
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

let mongoDBUrl = "mongodb://localhost:27017/yoga_studio";
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/contact', contact);

app.use(express.static(path.join(__dirname, "../Frontend","public")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend","public","index.html"));
});

app.listen((process.env.PORT || PORT), ()=>{
  console.log("App is running on http://localhost:8000");
})

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', mongoDBUrl)
})

db.on('error', err => {
  console.error('connection error:', mongoDBUrl)
})