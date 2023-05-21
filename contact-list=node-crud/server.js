const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/models/db");
const router = require("./app/routes/contact");
const bodyParser = require("body-parser");
const cors = require('cors');

dotenv.config();

var app = express();

connectDB();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static( 'public'));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Contact list app in listening on post ${process.env.PORT}`);
})