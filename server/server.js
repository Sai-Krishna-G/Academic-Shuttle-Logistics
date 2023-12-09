// require("dotenv").config();
// const connectmongodb = require("./database/db");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require('body-parser')
const port = 5000
mongoose.connect('mongodb+srv://data1:1data@cluster0.ql6u4tr.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB database');
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/authorization",require("./routes/authorization"))
// app.use("/api/auth", require("./routes/auth"))
app.use(bodyParser.urlencoded({ extended: false }))








// parse application/json
app.use(bodyParser.json())
app.listen(5000, () => {
    console.log(`Connected Server http://localhost:5000`);
})


