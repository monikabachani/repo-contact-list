const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstname: String,
    lastname: String,
    mobile: Number,
    email: String,
    company: String
})

const contactModel = mongoose.model('contacts', schema);
module.exports = {contactModel}
